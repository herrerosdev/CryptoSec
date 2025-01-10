class CSecurity {
  
      //https://geraintluff.github.io/sha256/
      //Web To test IT
  static Hash_sha256(ascii) {
    var sha256={};
    sha256.h = "";
    sha256.k = "";
    function rightRotate(value, amount) {
      return (value >>> amount) | (value << (32 - amount));
    }

    var mathPow = Math.pow;
    var maxWord = mathPow(2, 32);
    var lengthProperty = "length";
    var i, j; // Used as a counter across the whole file
    var result = "";

    var words = [];
    var asciiBitLength = ascii[lengthProperty] * 8;

    //* caching results is optional - remove/add slash from front of this line to toggle
    // Initial hash value: first 32 bits of the fractional parts of the square roots of the first 8 primes
    // (we actually calculate the first 64, but extra values are just ignored)
    var hash = (sha256.h = sha256.h || []);
    // Round constants: first 32 bits of the fractional parts of the cube roots of the first 64 primes
    var k = (sha256.k = sha256.k || []);
    var primeCounter = k[lengthProperty];
    /*/
        var hash = [], k = [];
        var primeCounter = 0;
        //*/

    var isComposite = {};
    for (var candidate = 2; primeCounter < 64; candidate++) {
      if (!isComposite[candidate]) {
        for (i = 0; i < 313; i += candidate) {
          isComposite[i] = candidate;
        }
        hash[primeCounter] = (mathPow(candidate, 0.5) * maxWord) | 0;
        k[primeCounter++] = (mathPow(candidate, 1 / 3) * maxWord) | 0;
      }
    }

    ascii += "\x80"; // Append Ƈ' bit (plus zero padding)
    while ((ascii[lengthProperty] % 64) - 56) ascii += "\x00"; // More zero padding
    for (i = 0; i < ascii[lengthProperty]; i++) {
      j = ascii.charCodeAt(i);
      if (j >> 8) return; // ASCII check: only accept characters in range 0-255
      words[i >> 2] |= j << (((3 - i) % 4) * 8);
    }
    words[words[lengthProperty]] = (asciiBitLength / maxWord) | 0;
    words[words[lengthProperty]] = asciiBitLength;

    // process each chunk
    for (j = 0; j < words[lengthProperty]; ) {
      var w = words.slice(j, (j += 16)); // The message is expanded into 64 words as part of the iteration
      var oldHash = hash;
      // This is now the undefinedworking hash", often labelled as variables a...g
      // (we have to truncate as well, otherwise extra entries at the end accumulate
      hash = hash.slice(0, 8);

      for (i = 0; i < 64; i++) {
        var i2 = i + j;
        // Expand the message into 64 words
        // Used below if
        var w15 = w[i - 15],
          w2 = w[i - 2];

        // Iterate
        var a = hash[0],
          e = hash[4];
        var temp1 =
          hash[7] +
          (rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25)) + // S1
          ((e & hash[5]) ^ (~e & hash[6])) + // ch
          k[i] +
          // Expand the message schedule if needed
          (w[i] =
            i < 16
              ? w[i]
              : (w[i - 16] +
                  (rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ (w15 >>> 3)) + // s0
                  w[i - 7] +
                  (rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ (w2 >>> 10))) | // s1
                0);
        // This is only used once, so *could* be moved below, but it only saves 4 bytes and makes things unreadble
        var temp2 =
          (rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22)) + // S0
          ((a & hash[1]) ^ (a & hash[2]) ^ (hash[1] & hash[2])); // maj

        hash = [(temp1 + temp2) | 0].concat(hash); // We don't bother trimming off the extra ones, they're harmless as long as we're truncating when we do the slice()
        hash[4] = (hash[4] + temp1) | 0;
      }

      for (i = 0; i < 8; i++) {
        hash[i] = (hash[i] + oldHash[i]) | 0;
      }
    }

    for (i = 0; i < 8; i++) {
      for (j = 3; j + 1; j--) {
        var b = (hash[i] >> (j * 8)) & 255;
        result += (b < 16 ? 0 : "") + b.toString(16);
      }
    }
    return result;
  }

  /**
   * Encrypt a text using AES encryption in Counter mode of operation.
   *
   * Unicode multi-byte character safe
   *
   * @param   {string} plaintext - Source text to be encrypted.
   * @param   {string} password - The password to use to generate a key.
   * @param   {number} nBits - Number of bits to be used in the key; 128 / 192 / 256.
   * @returns {string} Encrypted text.
   *
   * @example
   *   var encr = Aes.Ctr.encrypt('big secret', 'pāşšŵōřđ', 256); // encr: 'lwGl66VVwVObKIr6of8HVqJr'
   */

  static Encrypt_AES(plaintext, password, nBits) {
    var blockSize = 16; // block size fixed at 16 bytes / 128 bits (Nb=4) for AES
    if (!(nBits == 128 || nBits == 192 || nBits == 256)) return ""; // standard allows 128/192/256 bit keys
    plaintext = String(plaintext).utf8Encode();
    password = String(password).utf8Encode();

    // use AES itself to encrypt password to get cipher key (using plain password as source for key
    // expansion) - gives us well encrypted key (though hashed key might be preferred for prod'n use)
    var nBytes = nBits / 8; // no bytes in key (16/24/32)
    var pwBytes = new Array(nBytes);
    for (var i = 0; i < nBytes; i++) {
      // use 1st 16/24/32 chars of password for key
      pwBytes[i] = isNaN(password.charCodeAt(i)) ? 0 : password.charCodeAt(i);
    }
    var key = Aes.cipher(pwBytes, Aes.keyExpansion(pwBytes)); // gives us 16-byte key
    key = key.concat(key.slice(0, nBytes - 16)); // expand key to 16/24/32 bytes long

    // initialise 1st 8 bytes of counter block with nonce (NIST SP800-38A §B.2): [0-1] = millisec,
    // [2-3] = random, [4-7] = seconds, together giving full sub-millisec uniqueness up to Feb 2106
    var counterBlock = new Array(blockSize);

    var nonce = new Date().getTime(); // timestamp: milliseconds since 1-Jan-1970
    var nonceMs = nonce % 1000;
    var nonceSec = Math.floor(nonce / 1000);
    var nonceRnd = Math.floor(Math.random() * 0xffff);
    // for debugging: nonce = nonceMs = nonceSec = nonceRnd = 0;

    for (var i = 0; i < 2; i++) counterBlock[i] = (nonceMs >>> (i * 8)) & 0xff;
    for (var i = 0; i < 2; i++)
      counterBlock[i + 2] = (nonceRnd >>> (i * 8)) & 0xff;
    for (var i = 0; i < 4; i++)
      counterBlock[i + 4] = (nonceSec >>> (i * 8)) & 0xff;

    // and convert it to a string to go on the front of the ciphertext
    var ctrTxt = "";
    for (var i = 0; i < 8; i++) ctrTxt += String.fromCharCode(counterBlock[i]);

    // generate key schedule - an expansion of the key into distinct Key Rounds for each round
    var keySchedule = Aes.keyExpansion(key);

    var blockCount = Math.ceil(plaintext.length / blockSize);
    var ciphertxt = new Array(blockCount); // ciphertext as array of strings

    for (var b = 0; b < blockCount; b++) {
      // set counter (block #) in last 8 bytes of counter block (leaving nonce in 1st 8 bytes)
      // done in two stages for 32-bit ops: using two words allows us to go past 2^32 blocks (68GB)
      for (var c = 0; c < 4; c++) counterBlock[15 - c] = (b >>> (c * 8)) & 0xff;
      for (var c = 0; c < 4; c++)
        counterBlock[15 - c - 4] = (b / 0x100000000) >>> (c * 8);

      var cipherCntr = Aes.cipher(counterBlock, keySchedule); // -- encrypt counter block --

      // block size is reduced on final block
      var blockLength =
        b < blockCount - 1
          ? blockSize
          : ((plaintext.length - 1) % blockSize) + 1;
      var cipherChar = new Array(blockLength);

      for (var i = 0; i < blockLength; i++) {
        // -- xor plaintext with ciphered counter char-by-char --
        cipherChar[i] = cipherCntr[i] ^ plaintext.charCodeAt(b * blockSize + i);
        cipherChar[i] = String.fromCharCode(cipherChar[i]);
      }
      ciphertxt[b] = cipherChar.join("");
    }

    // use Array.join() for better performance than repeated string appends
    var ciphertext = ctrTxt + ciphertxt.join("");
    ciphertext = ciphertext.base64Encode();

    return ciphertext;
  }

  /**
   * Decrypt a text encrypted by AES in counter mode of operation
   *
   * @param   {string} ciphertext - Source text to be encrypted.
   * @param   {string} password - Password to use to generate a key.
   * @param   {number} nBits - Number of bits to be used in the key; 128 / 192 / 256.
   * @returns {string} Decrypted text
   *
   * @example
   *   var decr = Aes.Ctr.encrypt('lwGl66VVwVObKIr6of8HVqJr', 'pāşšŵōřđ', 256); // decr: 'big secret'
   */

  static Decrypt_AES(ciphertext, password, nBits) {
    var blockSize = 16; // block size fixed at 16 bytes / 128 bits (Nb=4) for AES
    if (!(nBits == 128 || nBits == 192 || nBits == 256)) return ""; // standard allows 128/192/256 bit keys
    ciphertext = String(ciphertext).base64Decode();
    password = String(password).utf8Encode();

    // use AES to encrypt password (mirroring encrypt routine)
    var nBytes = nBits / 8; // no bytes in key
    var pwBytes = new Array(nBytes);
    for (var i = 0; i < nBytes; i++) {
      pwBytes[i] = isNaN(password.charCodeAt(i)) ? 0 : password.charCodeAt(i);
    }
    var key = Aes.cipher(pwBytes, Aes.keyExpansion(pwBytes));
    key = key.concat(key.slice(0, nBytes - 16)); // expand key to 16/24/32 bytes long

    // recover nonce from 1st 8 bytes of ciphertext
    var counterBlock = new Array(8);
    var ctrTxt = ciphertext.slice(0, 8);
    for (var i = 0; i < 8; i++) counterBlock[i] = ctrTxt.charCodeAt(i);

    // generate key schedule
    var keySchedule = Aes.keyExpansion(key);

    // separate ciphertext into blocks (skipping past initial 8 bytes)
    var nBlocks = Math.ceil((ciphertext.length - 8) / blockSize);
    var ct = new Array(nBlocks);
    for (var b = 0; b < nBlocks; b++)
      ct[b] = ciphertext.slice(
        8 + b * blockSize,
        8 + b * blockSize + blockSize
      );
    ciphertext = ct; // ciphertext is now array of block-length strings

    // plaintext will get generated block-by-block into array of block-length strings
    var plaintxt = new Array(ciphertext.length);

    for (var b = 0; b < nBlocks; b++) {
      // set counter (block #) in last 8 bytes of counter block (leaving nonce in 1st 8 bytes)
      for (var c = 0; c < 4; c++) counterBlock[15 - c] = (b >>> (c * 8)) & 0xff;
      for (var c = 0; c < 4; c++)
        counterBlock[15 - c - 4] =
          (((b + 1) / 0x100000000 - 1) >>> (c * 8)) & 0xff;

      var cipherCntr = Aes.cipher(counterBlock, keySchedule); // encrypt counter block

      var plaintxtByte = new Array(ciphertext[b].length);
      for (var i = 0; i < ciphertext[b].length; i++) {
        // -- xor plaintxt with ciphered counter byte-by-byte --
        plaintxtByte[i] = cipherCntr[i] ^ ciphertext[b].charCodeAt(i);
        plaintxtByte[i] = String.fromCharCode(plaintxtByte[i]);
      }
      plaintxt[b] = plaintxtByte.join("");
    }

    // join array of blocks into single plaintext string
    var plaintext = plaintxt.join("");
    plaintext = plaintext.utf8Decode(); // decode from UTF8 back to Unicode multi-byte chars

    return plaintext;
  }
}
