/*
 * KICK.selectData
 * 
 * @packge		Zip
 * @packge		Brith
 * @packge		CardDete
 * @author		hom
 * @copyright	Copyright (C) KICKcreative Co., All Rights Reserved.
 * 
 */

var KICK = KICK || {};

(function(KICK) {
	
	/**
     * Library
	 * 
     * @param checkBrowser
	 * @param onChangeTimer
     * 
     **/
	
	
	/*
	 * checkBrowser
	 * @note	
	 * 
	 */
	
	var checkBrowser = {
		ie:function(){
			var result = $.browser.msie ? true : false;
			return result;
		},
		ie6:function(){
			var result = $.browser.msie && $.browser.version == "6.0" ? true : false;
			return result;
		},
		ie7:function(){
			var result = $.browser.msie && $.browser.version == "7.0" ? true : false;
			return result;
		},
		ie8:function(){
			var result = $.browser.msie && $.browser.version == "8.0" ? true : false;
			return result;
		},
		ie9:function(){
			var result = $.browser.msie && $.browser.version == "9.0" ? true : false;
			return result;
		},
		chrome:function(){
			var agent = navigator.userAgent.toLowerCase();
			var chrome = (agent.indexOf("chrome") != -1);
			var result = chrome ? true : false;
			return result;
		},
		safari:function(){
			var result = $.browser.safari ? true : false;
			return result;
		},
		firefox:function(){
			var result = $.browser.mozilla ? true : false;
			return result;
		},
		opera:function(){
			var result = $.browser.opera ? true : false;
			return opera;
		},
		webkit:function(){
			var result = $.browser.webkit ? true : false;
			return result;
		},
		iphone:function(){
			var agent = (navigator.userAgent||navigator.vendor||window.opera).toLowerCase();
			var iphone = (agent.indexOf("iphone") != -1);
			var result = iphone ? true : false;
			return result;
		},
		ipad:function(){
			var agent = (navigator.userAgent||navigator.vendor||window.opera).toLowerCase();
			var ipad = (agent.indexOf("ipad") != -1);
			var result = ipad ? true : false;
			return result;
		},
		isMobile:function(){
			var agent = (navigator.userAgent||navigator.vendor||window.opera).toLowerCase();
			var isMobile = /android.+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|ad|od)|iris|kindle|lge |maemo|meego.+mobile|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(agent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(agent.substr(0,4));
			var result = isMobile ? true : false;
			return result;
		}
	};
	
	
	/*
	 * onChangeTimer
	 * @note	
	 * 
	 */
	
	var onChangeTimer = function($obj, func) {
		var _selected_val = $obj.val(),
			interval_timer = {},
			interval_time = 800;
			
		$obj.bind('focus', function() {
			var $this = $(this);
			interval_timer = setInterval(function() {
				var selected_val = $this.val();
				if (_selected_val != selected_val) {
					func();
					_selected_val = selected_val;
				}
			}, interval_time);
		});
		$obj.bind('blur', function() {
			clearInterval(interval_timer);
		});
	};
	
	
    /**
     * Zip
	 * 
     * @param _elm_city: html select element jquery selector
	 * @param _elm_area: html select element jquery selector
	 * @param _elm_code: html input text element jquery selector
	 * @param _city: init city value form city select element
	 * @param _area: init area value form area select element
     * 
     **/

    KICK.Zip = function(_elm_city, _elm_area, _elm_code, _city, _area) {
		
        // Set value
		this.INIT = true;
		this.CITY = '';
		this.AREA = '';
		this.STEP = '';
		this.ARR = [];
		this.ARR_SUB = [];
		this.$zip_city = {};
		this.$zip_area = {};
		this.$zip_code = {};
		this.zip_city_html = '';
		this.zip_area_html = '';
		
        // Set function in object
        this.__construct = function() {
			_this.create_data();
			
			_this.CITY = (_city) ? _city : null;
			_this.AREA = (_area) ? _area : null;
			
			_this.$zip_city = $(_elm_city);
			_this.$zip_area = $(_elm_area);
			_this.$zip_code = $(_elm_code);
			
			_this.zip_city_html = _this.$zip_city.html();
			_this.zip_area_html = _this.$zip_area.html();
			
			if (checkBrowser.iphone()) {
				onChangeTimer(_this.$zip_city, _this.zip_area);
				onChangeTimer(_this.$zip_area, _this.zip_code);
			} else {
				_this.$zip_city.bind('change', _this.zip_area);
				_this.$zip_area.bind('change', _this.zip_code);
			}
			
			_this.zip_city();
        };
		
		
		/*
		 * create_data
		 * @note	create zip use array
		 * 
		 */
		
		this.create_data = function() {
			_this.ARR = ["台北市", "新北市", "基隆市", "宜蘭縣", "新竹市", "新竹縣", "桃園縣", "苗栗縣", "台中市", "彰化縣", "南投縣", "嘉義市", "嘉義縣", "雲林縣", "台南市", "高雄市", "澎湖縣", "屏東縣", "台東縣", "花蓮縣", "金門縣", "連江縣", "南海諸島", "釣魚台列嶼"];
			_this.ARR_SUB["台北市"] = new Array("中正區 100", "大同區 103", "中山區 104", "松山區 105", "大安區 106", "萬華區 108", "信義區 110", "士林區 111", "北投區 112", "內湖區 114", "南港區 115", "文山區 116");
			_this.ARR_SUB["新北市"] = new Array("萬里區 207", "金山區 208", "板橋區 220", "汐止區 221", "深坑區 222", "石碇區 223", "瑞芳區 224", "平溪區 226", "雙溪區 227", "貢寮區 228", "新店區 231", "坪林區 232", "烏來區 233", "永和區 234", "中和區 235", "土城區 236", "三峽區 237", "樹林區 238", "鶯歌區 239", "三重區 241", "新莊區 242", "泰山區 243", "林口區 244", "蘆洲區 247", "五股區 248", "八里區 249", "淡水區 251", "三芝區 252", "石門區 253");
			_this.ARR_SUB["基隆市"] = new Array("仁愛區 200", "信義區 201", "中正區 202", "中山區 203", "安樂區 204", "暖暖區 205", "七堵區 206");
			_this.ARR_SUB["宜蘭縣"] = new Array("宜蘭市 260", "頭城鎮 261", "礁溪鄉 262", "壯圍鄉 263", "員山鄉 264", "羅東鎮 265", "三星鄉 266", "大同鄉 267", "五結鄉 268", "冬山鄉 269", "蘇澳鎮 270", "南澳鄉 272");
			_this.ARR_SUB["新竹市"] = new Array("東區 300", "北區 300", "香山區 300");
			_this.ARR_SUB["新竹縣"] = new Array("竹北市 302", "湖口鄉 303", "新豐鄉 304", "新埔鎮 305", "關西鎮 306", "芎林鄉 307", "寶山鄉 308", "竹東鎮 310", "五峰鄉 311", "橫山鄉 312", "尖石鄉 313", "北埔鄉 314", "峨眉鄉 315");
			_this.ARR_SUB["桃園縣"] = new Array("中壢市 320", "平鎮市 324", "龍潭鄉 325", "楊梅鎮 326", "新屋鄉 327", "觀音鄉 328", "桃園市 330", "龜山鄉 330", "龜山鄉 333", "八德市 334", "大溪鎮 335", "復興鄉 336", "大園鄉 337", "蘆竹鄉 338");
			_this.ARR_SUB["苗栗縣"] = new Array("竹南鎮 350", "頭份鎮 351", "三灣鄉 352", "南庄鄉 353", "獅潭鄉 354", "後龍鎮 356", "通霄鎮 357", "苑裡鎮 358", "苗栗市 360", "造橋鄉 361", "頭屋鄉 362", "公館鄉 363", "大湖鄉 364", "泰安鄉 365", "銅鑼鄉 366", "三義鄉 367", "西湖鄉 368", "卓蘭鎮 369");
			_this.ARR_SUB["台中市"] = new Array("中　區 400", "東　區 401", "南　區 402", "西　區 403", "北　區 404", "北屯區 406", "西屯區 407", "南屯區 408", "太平區 411", "大里區 412", "霧峰區 413", "烏日區 414", "豐原區 420", "后里區 421", "石岡區 422", "東勢區 423", "和平區 424", "新社區 426", "潭子區 427", "大雅區 428", "神岡區 429", "大肚區 432", "沙鹿區 433", "龍井區 434", "梧棲區 435", "清水區 436", "大甲區 437", "外埔區 438", "大安區 439");
			_this.ARR_SUB["彰化縣"] = new Array("彰化市 500", "芬園鄉 502", "花壇鄉 503", "秀水鄉 504", "鹿港鎮 505", "福興鄉 506", "線西鄉 507", "和美鎮 508", "伸港鄉 509", "員林鎮 510", "社頭鄉 511", "永靖鄉 512", "埔心鄉 513", "溪湖鎮 514", "大村鄉 515", "埔鹽鄉 516", "田中鎮 520", "北斗鎮 521", "田尾鄉 522", "埤頭鄉 523", "溪州鄉 524", "竹塘鄉 525", "二林鎮 526", "大城鄉 527", "芳苑鄉 528", "二水鄉 530");
			_this.ARR_SUB["南投縣"] = new Array("南投市 540", "中寮鄉 541", "草屯鎮 542", "國姓鄉 544", "埔里鎮 545", "仁愛鄉 546", "名間鄉 551", "集集鎮 552", "水里鄉 553", "魚池鄉 555", "信義鄉 556", "竹山鎮 557", "鹿谷鄉 558");
			_this.ARR_SUB["嘉義市"] = new Array("西區 600", "東區 600");
			_this.ARR_SUB["嘉義縣"] = new Array("番路鄉 602", "梅山鄉 603", "竹崎鄉 604", "阿里山 605", "中埔鄉 606", "大埔鄉 607", "水上鄉 608", "鹿草鄉 611", "太保市 612", "朴子市 613", "東石鄉 614", "六腳鄉 615", "新港鄉 616", "民雄鄉 621", "大林鎮 622", "溪口鄉 623", "義竹鄉 624", "布袋鎮 625");
			_this.ARR_SUB["雲林縣"] = new Array("斗南鎮 630", "大埤鄉 631", "虎尾鎮 632", "土庫鎮 633", "褒忠鄉 634", "東勢鄉 635", "台西鄉 636", "崙背鄉 637", "麥寮鄉 638", "斗六市 640", "林內鄉 643", "古坑鄉 646", "莿桐鄉 647", "西螺鎮 648", "二崙鄉 649", "北港鎮 651", "水林鄉 652", "口湖鄉 653", "四湖鄉 654", "元長鄉 655");
			_this.ARR_SUB["台南市"] = new Array("中西區 700", "東　區 701", "南　區 702", "北　區 704", "安平區 708", "安定區 745", "永康區 710", "歸仁區 711", "新化區 712", "左鎮區 713", "玉井區 714", "楠西區 715", "南化區 716", "仁德區 717", "關廟區 718", "龍崎區 719", "官田區 720", "麻豆區 721", "佳里區 722", "西港區 723", "七股區 724", "將軍區 725", "學甲區 726", "北門區 727", "新營區 730", "後壁區 731", "白河區 732", "東山區 733", "六甲區 734", "下營區 735", "柳營區 736", "鹽水區 737", "善化區 741", "新市區 741", "大內區 742", "山上區 743", "新市區 744", "安南區 709");
			_this.ARR_SUB["高雄市"] = new Array("新興區 800", "前金區 801", "苓雅區 802", "鹽埕區 803", "鼓山區 804", "旗津區 805", "前鎮區 806", "三民區 807", "楠梓區 811", "小港區 812", "左營區 813", "仁武區 814", "大社區 815", "岡山區 820", "路竹區 821", "阿蓮區 822", "田寮區 823", "燕巢區 824", "橋頭區 825", "梓官區 826", "彌陀區 827", "永安區 828", "湖內區 829", "鳳山市 830", "大寮區 831", "林園區 832", "鳥松區 833", "大樹區 840", "旗山區 842", "美濃區 843", "六龜區 844", "內門區 845", "杉林區 846", "甲仙區 847", "桃源區 848", "三民區 849", "茂林區 851", "茄萣區 852");
			_this.ARR_SUB["澎湖縣"] = new Array("馬公市 880", "西嶼鄉 881", "望安鄉 882", "七美鄉 883", "白沙鄉 884", "湖西鄉 885");
			_this.ARR_SUB["屏東縣"] = new Array("屏東市 900", "三地門 901", "霧台鄉 902", "瑪家鄉 903", "九如鄉 904", "里港鄉 905", "高樹鄉 906", "鹽埔鄉 907", "長治鄉 908", "麟洛鄉 909", "竹田鄉 911", "內埔鄉 912", "萬丹鄉 913", "潮州鎮 920", "泰武鄉 921", "來義鄉 922", "萬巒鄉 923", "崁頂鄉 924", "新埤鄉 925", "南州鄉 926", "林邊鄉 927", "東港鎮 928", "琉球鄉 929", "佳冬鄉 931", "新園鄉 932", "枋寮鄉 940", "枋山鄉 941", "春日鄉 942", "獅子鄉 943", "車城鄉 944", "牡丹鄉 945", "恆春鎮 946", "滿州鄉 947");
			_this.ARR_SUB["台東縣"] = new Array("台東市 950", "綠島鄉 951", "蘭嶼鄉 952", "延平鄉 953", "卑南鄉 954", "鹿野鄉 955", "關山鎮 956", "海端鄉 957", "池上鄉 958", "東河鄉 959", "成功鎮 961", "長濱鄉 962", "太麻里 963", "金峰鄉 964", "大武鄉 965", "達仁鄉 966");
			_this.ARR_SUB["花蓮縣"] = new Array("花蓮市 970", "新城鄉 971", "秀林鄉 972", "吉安鄉 973", "壽豐鄉 974", "鳳林鎮 975", "光復鄉 976", "豐濱鄉 977", "瑞穗鄉 978", "萬榮鄉 979", "玉里鎮 981", "卓溪鄉 982", "富里鄉 983");
			_this.ARR_SUB["金門縣"] = new Array("金沙鎮 890", "金湖鎮 891", "金寧鄉 892", "金城鎮 893", "烈嶼鄉 894", "烏坵鄉 896");
			_this.ARR_SUB["連江縣"] = new Array("南竿鄉 209", "北竿鄉 210", "莒光鄉 211", "東引鄉 212");
			_this.ARR_SUB["南海諸島"] = new Array("東　沙 817", "南　沙 819");
			_this.ARR_SUB["釣魚台列嶼"] = new Array("釣魚台列嶼 290");
		};

        
		/*
		 * zip_city
		 * @note	create city select option
		 * 
		 */
		 
        this.zip_city = function() {
            var opt = _this.zip_city_html;
			for (loc in _this.ARR) {
				selected = '';
				if (_this.ARR[loc] == _this.CITY) selected = ' selected';
				opt += "<option value='" + _this.ARR[loc] + "'" + selected + ">" + _this.ARR[loc] + "</option>";
			}
			_this.$zip_city.html(opt);
			_this.zip_area();
        };
		
		
		/*
		 * zip_area
		 * @note	create area select option
		 * 
		 */
		 
        this.zip_area = function() {
            var key = _this.$zip_city.val();
			var opt = _this.zip_area_html;
			for (loc in _this.ARR_SUB[key]) {
				var chk = "";
				if (_this.INIT) {
					if (loc == _this.STEP) chk = "selected";
					if (_this.ARR_SUB[key][loc].slice(0, _this.ARR_SUB[key][loc].length - 4) == _this.AREA) chk = 'selected';
				}
				opt += "<option value='" + _this.ARR_SUB[key][loc].slice(0, _this.ARR_SUB[key][loc].length - 4) + "' " + chk + ">" + _this.ARR_SUB[key][loc].slice(0, _this.ARR_SUB[key][loc].length - 4) + "</option>";
			}
			_this.$zip_area.html(opt);
			_this.zip_code();
			_this.INIT = false;
        };
		
		
		/*
		 * zip_code
		 * @note	create area code number
		 * 
		 */
		 
        this.zip_code = function() {
            var key = _this.$zip_city.val();
			var loc = (_this.zip_area_html != "") ? _this.$zip_area[0].selectedIndex - 1 : _this.$zip_area[0].selectedIndex;
			if (loc > -1) {
				_this.$zip_code.val(_this.ARR_SUB[key][loc].slice(_this.ARR_SUB[key][loc].length - 3, _this.ARR_SUB[key][loc].length));
			}
        };
		
		var _this = this;
		
        this.__construct();
    };

    // set function by prototype
    KICK.Zip.prototype.hook = function() {
        console.log('hook function on outside');
    };
	
	
	/**
     * Brith
	 * 
     * @param _elm_year: html select element jquery selector
	 * @param _elm_month: html select element jquery selector
	 * @param _elm_day: html select element jquery selector
	 * @param _y: init year value form year select element
	 * @param _m: init month value form month select element
	 * @param _d: init day value form day select element
	 * @param _start_y: year start value range form year select element
	 * @param _end_y: year end value range form year select element
     * 
     **/
	
	KICK.Brith = function(_elm_year, _elm_month, _elm_day, _y, _m, _d, _start_y, _end_y) {
		
        // Set value
		this.Y = '';
		this.M = '';
		this.D = '';
		this._START_Y = '';
		this._END_Y = '';
		this.$birth_year = {};
		this.$birth_month = {};
		this.$birth_day = {};
		this.birth_year_html = '';
		this.birth_month_html = '';
		this.birth_day_html = '';
		
        // Set function in object
        this.__construct = function() {
			var date = new Date();
			var curr_year = date.getFullYear();
			_this.Y = (_y) ? _y : null;
			_this.M = (_m) ? _m : null;
			_this.D = (_d) ? _d : null;
			_this._START_Y = (_start_y) ? _start_y : curr_year;
			_this._END_Y = (_end_y) ? _end_y : curr_year - 100;
			
			_this.$birth_year = $(_elm_year);
			_this.$birth_month = $(_elm_month);
			_this.$birth_day = $(_elm_day);
			
			_this.birth_year_html = _this.$birth_year.html();
			_this.birth_month_html = _this.$birth_month.html();
			_this.birth_day_html = _this.$birth_day.html();
			
			if (checkBrowser.iphone()) {
				onChangeTimer(_this.$birth_month, _this.birth_day);
			} else {
				_this.$birth_month.bind('change', _this.birth_day);
			}
			
			_this.birth_year();
        };
		
        
		/*
		 * birth_year
		 * @note	create year select option
		 * 
		 */
		 
        this.birth_year = function() {
            var opt = _this.birth_year_html;
			for (var i = _this._START_Y; i >= _this._END_Y; i--) {
				if (i == _this.Y) {
					more = ' selected';
				} else {
					more = '';
				}
				opt += "<option value='" + i + "'" + more + ">" + i + "</option>";
			}
			_this.$birth_year.html(opt);
			_this.birth_month();
        };
		
		
		/*
		 * birth_month
		 * @note	create month select option
		 * 
		 */
		 
        this.birth_month = function() {
            var opt = _this.birth_month_html;
			for (var i = 1; i <= 12; i++) {
				if (i >= 1 && i <= 9) i = String("0" + i);
				
				if (i == _this.M) {
					more = ' selected';
				} else {
					more = '';
				}
				
				opt += "<option value='" + i + "'" + more + ">" + i + "</option>";
			}
			_this.$birth_month.html(opt);
			_this.birth_day();
        };
		
		
		/*
		 * birth_day
		 * @note	create day code number
		 * 
		 */
		 
        this.birth_day = function() {
            var key = _this.$birth_month.val();
			var opt = _this.birth_day_html;
			if (key == "01" || key == "03" || key == "05" || key == "07" || key == "08" || key == "10" || key == "12") {
				for (var i = 1; i <= 31; i++) {
					if (i >= 1 && i <= 9) i = String("0" + i);
					if (i == _this.D) {
						more = ' selected';
					} else {
						more = '';
					}
					opt += "<option value='" + i + "'" + more + ">" + i + "</option>";
				}
			} else if (key == "04" || key == "06" || key == "09" || key == "11") {
				for (var i = 1; i <= 30; i++) {
					if (i >= 1 && i <= 9) i = String("0" + i);
					if (i == _this.D) {
						more = ' selected';
					} else {
						more = '';
					}
					opt += "<option value='" + i + "'" + more + ">" + i + "</option>";
				}
			} else {
				for (var i = 1; i <= 28; i++) {
					if (i >= 1 && i <= 9) i = String("0" + i);
					if (i == _this.D) {
						more = ' selected';
					} else {
						more = '';
					}
					opt += "<option value='" + i + "'" + more + ">" + i + "</option>";
				}
			}
			_this.$birth_day.html(opt);
        };
		
		var _this = this;
		
        this.__construct();
    };

    // set function by prototype
    KICK.Brith.prototype.hook = function() {
        console.log('hook function on outside');
    };
	
	
	/**
     * CardDete
	 * 
     * @param _elm_year: html select element jquery selector
	 * @param _elm_month: html select element jquery selector
	 * @param _y: init year value form year select element
	 * @param _m: init month value form month select element
	 * @param _start_y: year start value range form year select element
	 * @param _end_y: year end value range form year select element
     * 
     **/
	
	KICK.CardDete = function(_elm_year, _elm_month, _y, _m, _start_y, _end_y) {
		
        // Set value
		this.Y = '';
		this.M = '';
		this._START_Y = '';
		this._END_Y = '';
		this.$card_year = {};
		this.$card_month = {};
		this.card_year_html = '';
		this.card_month_html = '';
		
        // Set function in object
        this.__construct = function() {
			var date = new Date();
			var curr_year = date.getFullYear();
			_this.Y = (_y) ? _y : null;
			_this.M = (_m) ? _m : null;
			_this._START_Y = (_start_y) ? _start_y : curr_year + 17;
			_this._END_Y = (_end_y) ? _end_y : curr_year;
			
			_this.$card_year = $(_elm_year);
			_this.$card_month = $(_elm_month);
			
			_this.card_year_html = _this.$card_year.html();
			_this.card_month_html = _this.$card_month.html();
			
			_this.card_year();
        };
		
        
		/*
		 * card_year
		 * @note	create year select option
		 * 
		 */
		 
        this.card_year = function() {
            var opt = _this.card_year_html;
			for (var i = _this._END_Y; i <= _this._START_Y; i++) {
				if (i == _this.Y) {
					more = ' selected';
				} else {
					more = '';
				}
				opt += "<option value='" + i + "'" + more + ">" + i + "</option>";
			}
			_this.$card_year.html(opt);
			_this.card_month();
        };
		
		
		/*
		 * card_month
		 * @note	create month select option
		 * 
		 */
		 
        this.card_month = function() {
            var opt = _this.card_month_html;
			for (var i = 1; i <= 12; i++) {
				if (i >= 1 && i <= 9) i = String("0" + i);
				
				if (i == _this.M) {
					more = ' selected';
				} else {
					more = '';
				}
				
				opt += "<option value='" + i + "'" + more + ">" + i + "</option>";
			}
			_this.$card_month.html(opt);
        };
		
		var _this = this;
		
        this.__construct();
		
	};

    // hook function by prototype
    KICK.CardDete.prototype.hook = function() {
        console.log('hook function on outside');
    };
	
	
	/**
     * Country
	 * 
     * @param _elm_country
     * 
     **/
	
	KICK.Country = function(_elm_country, _country) {
		
		this.ARR = [];
		this.$country = {};
		
		// Set function in object
        this.__construct = function() {
			_this.$country = $(_elm_country);
			_this.create_data();
			_this.insert_option();
		};
		
		this.create_data = function() {
			//_this.ARR = ['AFGHANISTAN','ALBANIA','ALGERIA','AMERICAN SAMOA','ANDORRA','ANGOLA','ANGUILLA','ANTARCTICA','ANTIGUA AND BARBUDA','ARGENTINA','ARMENIA','ARUBA','AUSTRALIA','AUSTRIA','AZERBAIJAN','BAHAMAS','BAHRAIN','BANGLADESH','BARBADOS','BELARUS','BELGIUM','BELIZE','BENIN','BERMUDA','BHUTAN','BOLIVIA','BOSNIA AND HERZEGOWINA','BOTSWANA','BOUVET ISLAND','BRAZIL','BRITISH INDIAN OCEAN TERRITORY','BRUNEI DARUSSALAM','BULGARIA','BURKINA FASO','BURUNDI','CAMBODIA','CAMEROON','CANADA','CAPE VERDE','CAYMAN ISLANDS','CENTRAL AFRICAN REPUBLIC','CHAD','CHILE','CHINA','CHRISTMAS ISLAND','COCOS (KEELING) ISLANDS','COLOMBIA','COMOROS','CONGO','CONGO, THE DEMOCRATIC REPUBLIC OF THE','COOK ISLANDS','COSTA RICA','COTE D'IVOIRE','CROATIA (local name: Hrvatska)','CUBA','CYPRUS','CZECH REPUBLIC','DENMARK','DJIBOUTI','DOMINICA','DOMINICAN REPUBLIC','EAST TIMOR','ECUADOR','EGYPT','EL SALVADOR','EQUATORIAL GUINEA','ERITREA','ESTONIA','ETHIOPIA','FALKLAND ISLANDS (MALVINAS)','FAROE ISLANDS','FIJI','FINLAND','FRANCE','FRANCE, METROPOLITAN','FRENCH GUIANA','FRENCH POLYNESIA','FRENCH SOUTHERN TERRITORIES','GABON','GAMBIA','GEORGIA','GERMANY','GHANA','GIBRALTAR','GREECE','GREENLAND','GRENADA','GUADELOUPE','GUAM','GUATEMALA','GUINEA','GUINEA-BISSAU','GUYANA','HAITI','HEARD AND MC DONALD ISLANDS','HOLY SEE (VATICAN CITY STATE)','HONDURAS','HONG KONG','HUNGARY','ICELAND','INDIA','INDONESIA','IRAN (ISLAMIC REPUBLIC OF)','IRAQ','IRELAND','ISRAEL','ITALY','JAMAICA','JAPAN','JORDAN','KAZAKHSTAN','KENYA','KIRIBATI','KOREA, DEMOCRATIC PEOPLE'S REPUBLIC OF','KOREA, REPUBLIC OF','KUWAIT','KYRGYZSTAN','LAO PEOPLE'S DEMOCRATIC REPUBLIC','LATVIA','LEBANON','LESOTHO','LIBERIA','LIBYAN ARAB JAMAHIRIYA','LIECHTENSTEIN','LITHUANIA','LUXEMBOURG','MACAU','MACEDONIA, THE FORMER YUGOSLAV REPUBLIC','MADAGASCAR','MALAWI','MALAYSIA','MALDIVES','MALI','MALTA','MARSHALL ISLANDS','MARTINIQUE','MAURITANIA','MAURITIUS','MAYOTTE','MEXICO','MICRONESIA, FEDERATED STATES OF','MOLDOVA, REPUBLIC OF','MONACO','MONGOLIA','MONTSERRAT','MOROCCO','MOZAMBIQUE','MYANMAR (Burma)','NAMIBIA','NAURU','NEPAL','NETHERLANDS','NETHERLANDS ANTILLES','NEW CALEDONIA','NEW ZEALAND','NICARAGUA','NIGER','NIGERIA','NIUE','NORFOLK ISLAND','NORTHERN MARIANA ISLANDS','NORWAY','OMAN','PAKISTAN','PALAU','PANAMA','PAPUA NEW GUINEA','PARAGUAY','PERU','PHILIPPINES','PITCAIRN','POLAND','PORTUGAL','PUERTO RICO','QATAR','REUNION','ROMANIA','RUSSIAN FEDERATION','RWANDA','SAINT KITTS AND NEVIS','SAINT LUCIA','SAINT VINCENT AND THE GRENADINES','SAMOA','SAN MARINO','SAO TOME AND PRINCIPE','SAUDI ARABIA','SENEGAL','SEYCHELLES','SIERRA LEONE','SINGAPORE','SLOVAKIA (Slovak Republic)','SLOVENIA','SOLOMON ISLANDS','SOMALIA','SOUTH AFRICA','SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS','SPAIN','SRI LANKA','ST. HELENA','ST. PIERRE AND MIQUELON','SUDAN','SURINAME','SVALBARD AND JAN MAYEN ISLANDS','SWAZILAND','SWEDEN','SWITZERLAND','SYRIAN ARAB REPUBLIC','TAIWAN','TAJIKISTAN','TANZANIA, UNITED REPUBLIC OF','THAILAND','TOGO','TOKELAU','TONGA','TRINIDAD AND TOBAGO','TUNISIA','TURKEY','TURKMENISTAN','TURKS AND CAICOS ISLANDS','TUVALU','UGANDA','UKRAINE','UNITED ARAB EMIRATES','UNITED KINGDOM','UNITED STATES','UNITED STATES MINOR OUTLYING ISLANDS','URUGUAY','UZBEKISTAN','VANUATU','VENEZUELA','VIET NAM','VIRGIN ISLANDS (BRITISH)','VIRGIN ISLANDS (U.S.)','WALLIS AND FUTUNA ISLANDS','WESTERN SAHARA','YEMEN','YUGOSLAVIA (now Serbia and Montenegro)','ZAMBIA','ZIMBABWE'];
			_this.ARR = ['CHINA', 'HONG KONG', 'TAIWAN'];
		};
		
		this.insert_option = function() {
			var html = '';
			for (var k in _this.ARR) {
				if (!_country) {
					html += '<option value="' + _this.ARR[k] + '">' + _this.ARR[k] + '</option>';
				} else {
					html += '<option value="' + _this.ARR[k] + '"' + ((_country == _this.ARR[k]) ? ' selected="selected"' : '') + '>' + _this.ARR[k] + '</option>';
				}
			}
			_this.$country.append(html);
		};
		
		var _this = this;
		
        this.__construct();
	};
	
})(KICK);