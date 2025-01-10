class CPagination {

    //Control Variables: default fase, put true on debug mode
    static enable_traces = false;

    ////////////////
    //CONSTRUCTOR///
    ////////////////
    constructor(PageIndex = 0, PageTam, _Count_Items_CALLBACK, _chargePage_CALLBACK) {

        //CALLBACKS TO ADAPT CLASS TO DIFFERENTS APIREST
        this.CountTotalItems_CALLBACK = _Count_Items_CALLBACK;
        this.chargePage_CALLBACK = _chargePage_CALLBACK;

        this.PageIndex_ = PageIndex; //Indicate the number of the actual page
        this.PageTam_ = PageTam;
        //This array stored the actual elements of the array
        this.PageItems_ = {};

        this.TotalItems_ = this.CountTotalItems_CALLBACK(); //Count all items on database
        this.TotalPages_ = this.CountTotalPages(); //All pages avaibles

        //Go to indicated page!!
        this.GoToPage(this.PageIndex_);

    }

    ///////////
    //METHODS//
    ///////////
    CountTotalPages() {
        //this.CountTotalItems_CALLBACK();

        var ItemsRatioPerPAGe = this.TotalItems_ / this.PageTam_;
        var NumPages = 0;

        if (this.TotalItems_ == 0) {
            NumPages = 0;
        }
        //Proporiconate extra page for rest of items
        else if ((this.TotalItems_ % this.PageTam_) != 0) {
            NumPages = Math.trunc(ItemsRatioPerPAGe);
        } else {
            //NO Proporiconate extra page for rest of items. subtarcting (-1) extra page
            NumPages = Math.trunc(ItemsRatioPerPAGe) - 1;
        }
        return NumPages;
    }

    NextPage() {
        if (this.PageIndex_ < this.TotalPages_) {
            this.PageIndex_++;
            this.chargePage_CALLBACK();
        } else {
            CTraces.LogTrace("Last Page is reached", CPagination.enable_traces);
        }
    }

    PreviousPage() {
        if (PageIndexToGo >= 0) {
            this.PageIndex_--;
            this.chargePage_CALLBACK();
        } else {
            CTraces.LogTrace("Action denied: First page", CPagination.enable_traces);
        }
    }

    GoToPage(PageIndexToGo) {
        if (PageIndexToGo >= 0 && PageIndexToGo <= this.TotalPages_) {
            this.PageIndex_ = PageIndexToGo;
            this.chargePage_CALLBACK();
        } else {
            CTraces.LogTrace("Action denied: Max/min index reached", CPagination.enable_traces);
        }
    }
}