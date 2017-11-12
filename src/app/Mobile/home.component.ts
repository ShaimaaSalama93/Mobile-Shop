import { Component , Input, Output, EventEmitter} from '@angular/core';



@Component({
  templateUrl: './home.component.html',
})
export class HomeComponent{
  
  sliderValuemin=100;
  sliderValuemax=10000;
  phoneBrand="all";
  phoneColor="all";


  /*PhoneColor*/
  colorChecked(check ,color){
   if(check){
     this.phoneColor = color;
   }
   else{
      this.phoneColor = "all";
   }
  }

  /*PhoneBrand*/
  BrandChecked(check2 ,brand){
   if(check2){
     this.phoneBrand = brand;
   }
   else{
      this.phoneBrand = "all";
   }
  }


  /*Currency Toggle*/
  Currency: string = 'EGP';
  CurrencyConvert=1;
    @Output()
    CurrencySelected: EventEmitter<string> = new EventEmitter<string>();
     CurrencySelectedChange() {
        this.CurrencySelected.emit(this.Currency);

        if(this.Currency == "USD"){
          this.CurrencyConvert=(0.05);
        }
        else{
          this.CurrencyConvert=1;
        }
    }


   /*Language En/Ar*/
  i=0;
  languageTitle="English";
  Language(lang){
    this.i=lang;
    if(lang==1){
       this.languageTitle="العربية";
    }
    else{
      this.languageTitle="English"
    }
  }

  /*ToggleFilter Button in mobile media*/
  FilterORDone="Filter"
  ToggleFilter(){
    if(this.FilterORDone=="Filter"){
      this.FilterORDone="Done";
    }
    else{
       this.FilterORDone="Filter";
    }
  }






 /*Product data*/
  phones =[
  {	
  	code:1,
  	imagetitle:"1",
  	name:"Iphone 7 Plus 64GB GSM Unlocked Phone - International Version (Gold)",
  	brand:"Iphone",
  	color:"gold",
    nameAr:"ايفون 7 بلس 64GB هاتف مغلق - اصدار عالمى (دهبى)",
    brandAr:"ايفون",
    colorAr:"دهبى",
  	price:7500,
  },
   {	
  	code:2,
  	imagetitle:"1A",
  	name:"Samsung Galaxy S8 64GB GSM Unlocked Phone - International Version (Gold)",
  	brand:"Samsung",
  	color:"gold",
    nameAr:"سامسونج جالكسى S8 64GB هاتف مغلق - اصدار عالمى (دهبى)",
    brandAr:"سامسونج",
    colorAr:"دهبى",
  	price:9000,
  },
   {	
  	code:3,
  	imagetitle:"1H",
  	name:"Huawie Y5  64GB GSM Unlocked Phone - International Version (Gold)",
  	brand:"Huawie",
  	color:"gold",
    nameAr:"هاواوى Y5  64GB هاتف مغلق - اصدار عالمى (دهبى)",
    brandAr:"هاواوى",
    colorAr:"دهبى",
  	price:2800,
  },
   {	
  	code:4,
  	imagetitle:"1s",
  	name:"Sony Z3  16GB GSM Unlocked Phone - International Version (Black)",
  	brand:"Sony",
  	color:"black",
    nameAr:"سونى اكسبريا z3 16GB هاتف مغلق - اصدار عالمى (اسود)",
    brandAr:"سونى",
    colorAr:"اسود",
  	price:5000,
  },
   {	
  	code:5,
  	imagetitle:"2",
  	name:"Iphone 6 64GB GSM Unlocked Phone - International Version (Gray)",
  	brand:"Iphone",
  	color:"gray",
    nameAr:"ايفون 6 64GB هاتف مغلق - اصدار عالمى (رمادى)",
    brandAr:"ايفون",
    colorAr:"رمادى",
  	price:6000,
  },
   {	
  	code:6,
  	imagetitle:"2A",
  	name:"Samsung Galaxy S7 64GB GSM Unlocked Phone - International Version (Black)",
  	brand:"Samsung",
  	color:"black",
    nameAr:"سامسونج جالكسى S7 64GB هاتف مغلق - اصدار عالمى (اسود)",
    brandAr:"سامسونج",
    colorAr:"ااسود",
  	price:4400,
  },
   {	
  	code:7,
  	imagetitle:"2H",
  	name:"Huawie Y6 II 32GB GSM Unlocked Phone - International Version (Gold)",
  	brand:"Huawie",
  	color:"gold",
    nameAr:"هاواوى Y6 II 32GB هاتف مغلق - اصدار عالمى (دهبى)",
    brandAr:"هوهاوى",
    colorAr:"دهبى",
  	price:2500,
  },
   {	
  	code:8,
  	imagetitle:"2s",
  	name:"Sony Xperia Z2 64GB GSM Unlocked Phone - International Version (Black)",
  	brand:"Sony",
  	color:"black",
    nameAr:"سونى اكسبريا Z2 64GB هاتف مغلق - اصدار عالمى (اسود)",
    brandAr:"سونى",
    colorAr:"اسود",
  	price:1800,
  },
   {	
  	code:9,
  	imagetitle:"3",
  	name:"Iphone 5 64GB GSM Unlocked Phone - International Version (white)",
  	brand:"Iphone",
  	color:"white",
    nameAr:"ايفون 5  64GB هاتف مغلق - اصدار عالمى (ابيض)",
    brandAr:"ايفون",
    colorAr:"ابيض",
  	price:5500,
  },
   {	
  	code:10,
  	imagetitle:"3A",
  	name:"Samsung Galaxy S6 64GB GSM Unlocked Phone - International Version (Black)",
  	brand:"Samsung",
  	color:"black",
    nameAr:"سامسونج جالكسى S6 64GB هاتف مغلق - اصدار عالمى (اسود)",
    brandAr:"سامسونج",
    colorAr:"اسود",
  	price:4500,
  },
   {	
  	code:11,
  	imagetitle:"3H",
  	name:"Huawie Mate 8 32GB GSM Unlocked Phone - International Version (Gold)",
  	brand:"Huawie",
  	color:"gold",
    nameAr:"هاواوى ’شفث 8 32GB هاتف مغلق - اصدار عالمى (دهبى)",
    brandAr:"هوهاوى",
    colorAr:"دهبى",
  	price:8500,
  },
   {	
  	code:12,
  	imagetitle:"3s",
  	name:"Sony C3 64GB GSM Unlocked Phone - International Version (Gold)",
  	brand:"Sony",
  	color:"gold",
     nameAr:"سونى اكسبريا c3 64GB هاتف مغلق - اصدار عالمى (اسود)",
    brandAr:"سونى",
    colorAr:"اسود",
  	price:2000,
  },
   {	
  	code:13,
  	imagetitle:"4",
  	name:"Iphone 4 16GB GSM Unlocked Phone - International Version (Black)",
  	brand:"Iphone",
  	color:"black",
     nameAr:"ايفون 4 16GB هاتف مغلق - اصدار عالمى (اسود)",
    brandAr:"ايفون",
    colorAr:"اسود",
  	price:3200,
  },
   {	
  	code:14,
  	imagetitle:"4A",
  	name:"Samsung Prime 8GB GSM Unlocked Phone - International Version (Black)",
  	brand:"Samsung",
  	color:"black",
     nameAr:"سامسونج جالكسى برايم 8GB هاتف مغلق - اصدار عالمى (اسود)",
    brandAr:"سامسونج",
    colorAr:"اسود",
  	price:2200,
  },
   {	
  	code:15,
  	imagetitle:"4H",
  	name:"Huawie Y3 16GB GSM Unlocked Phone - International Version (Black)",
  	brand:"Huawie",
  	color:"black",
    nameAr:"هاواوى Y3 16GB هاتف مغلق - اصدار عالمى (اسود)",
    brandAr:"هوهاوى",
    colorAr:"اسود",
  	price:1800,
  },
   {	
  	code:16,
  	imagetitle:"4s",
  	name:"Sony Xperia C2 8GB GSM Unlocked Phone - International Version (White)",
  	brand:"Sony",
  	color:"white",
    nameAr:"سونى اكسبريا c2 8GB هاتف مغلق - اصدار عالمى (ابيض)",
    brandAr:"سونى",
    colorAr:"ابيض",
  	price:1500,
  }
  ]

  LanguageData={
    Home:["Home","الرئيسية"],
    Contact:["Contact","تواصل معنا"],
    About:["About","عنا"],
    Shop:["Shop","السوق"],
    Offer:["Offer","العروض"],
    Blog:["Blog","البلوج"],
    MyAccount:["My Account","حسابك"],
    TopBrands:["Top Brands","أهم الماركات"],
    TopCategories:["Top Categories","أهم الأقسام"],
    Brand:["Brand","الماركه"],
    Search:["Search","بحث"],
    SA:["Samsung","سامسونج"],
    HU:["Huawie","هاواوى"],
    IP:["Iphone","ايفون"],
    SO:["Sony","سونى"],
    All:["All","الكل"],
    BL:["Black","اسود"],
    GA:["Gray","رمادى"],
    GO:["Gold","دهبى"],
    WH:["White","ابيض"],
    OP:["Oppo","اوبو"],
    NO:["Nokia","نوكيا"],
    MI:["Microsoft","ميكروسوفت"],
    MyShopping:["My Shopping Cart","سله المشتريات"],
    MyWishlist:["My Wishlist","قائمه الطلبات"],
    HelpCenter:["Help Center","مركز المساعده"],
    ReturnsWarrenty:["Returns & Warrenty","الضمان"],
    OrderHistory:["Order History","تاريخ التوصيل"],
    DeliveryInformation:["Delivery Information","معلومات التوصيل"],
    TermsConditions:["Terms & Conditions","الشروط"],
    PrivacyPolicy:["Privacy Policy","سياسه الخصوصيه"],
    ReturnPolicy:["Return Policy","سياسه الرجوع"],
    SiteMap:["Site Map","خريطه الموقع"],
    Account:["Account","الحساب"],
    Information:["Information","المعلومات"],
    More:["More","المزيد"],
    Color:["Color","اللون"],
    Price:["Price","السعر"],
    Min:["Min","الاقل"],
    Max:["Max","الاكثر"],
    Free:["FREE Shipping","الشحن مجانا"],
    By:["By","بواسطه"],
    Condition:["Condition","الحاله"],
    New:["New","جديد"],
    SoldBY:["Sold By","يباع بواسطه"],
    Mobile:["Mobile","موبيلى"],
    ADDTOCART:["ADD TO CART","اضف الى السله"],
    ProductInformation:["Product Information","معلومات عن المنتج"],
    Specifications:["Specifications","المواصفات"]
  }
}
