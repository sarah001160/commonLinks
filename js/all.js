

document.addEventListener('DOMContentLoaded', function () {
  //create Vue
  const para = {
    data() {
      return {
        data: [
          {
            name: "全國商工行政服務入口網",
            url: "https://gcis.nat.gov.tw/mainNew/"
          },
          {
            name: "一站式預查",
            url: "https://onestop.nat.gov.tw/oss/identity/Identity/init.do"
          },
          {
            name: "營業項目代碼表",
            url: "https://gcis.nat.gov.tw/cod/browseAction.do?method=browse"
          },
          {
            name: "工商憑證申請",
            url: "https://moeaca.nat.gov.tw/other/index.html"
          },
          {
            name: "公司負責人及主要股東資訊申報平台",
            url: "https://ctp.tdcc.com.tw/"
          },
          {
            name: "金融監督管理委員會",
            url: "https://www.fsc.gov.tw/ch/index.jsp"
          },
          {
            name: "公開觀測資訊站",
            url: "https://mops.twse.com.tw/mops/web/index"
          },

        ],
        searchKey: '',
        searchResult: [],
      }
    },
    methods: {
      doSearch() {
        const txt = this.searchKey.trim().toLowerCase();
        if (txt != '') {
          this.searchResult = this.data.filter((item) => {
            return item.name.includes(txt);
          })
        } else {
          return this.searchResult = this.data;
        }
      },
    },
    computed: { // 需搭配 return
    },
    mounted() {
      this.searchResult = this.data;
    },
    watch: {
      searchKey(val) {
        if (val.trim() == '') {
          this.doSearch();
        }
      }
    },
  };
  const app = Vue.createApp(para);
  app.mount('#vue-section');
})