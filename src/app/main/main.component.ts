import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  currentQuote;
  isShowPopup=false;
quoteArr=[  
  {  
    "shareCount":15011,
    "likeCount":23693,
    "viewCount":15074,
    "topics":[  
      "creativity",
      "life",
      "attitude"
    ],
    "author":{  
      "died":"Tuesday, March 22, 2016 10:40 AM",
      "born":"Tuesday, March 17, 2015 7:31 PM",
      "profession":"author",
      "intro":"Sunt ipsum deserunt et sint aute amet proident do labore dolor. Lorem aliqua aliqua pariatur Lorem do magna dolore. Laboris enim reprehenderit id in aliquip esse do ullamco tempor incididunt amet. Qui ut adipisicing dolor tempor velit. Labore ullamco fugiat culpa laborum aliquip enim pariatur minim dolor consectetur commodo. Consectetur velit eiusmod tempor aliqua do pariatur minim dolor pariatur anim laborum. Elit eiusmod ullamco aliqua adipisicing cillum sunt adipisicing cupidatat adipisicing cillum.\n\nCulpa aliquip nisi irure commodo officia adipisicing reprehenderit adipisicing irure aute sint enim cupidatat cillum. Aliqua ex enim ad pariatur. Velit incididunt Lorem laboris commodo eu labore labore laboris anim reprehenderit. Adipisicing exercitation eiusmod ipsum ipsum minim do. Mollit amet aliquip officia amet Lorem cupidatat. Excepteur officia occaecat nisi laborum et. Pariatur in cupidatat consequat excepteur sint ad do anim.",
      "name":"Noble Chapman",
      "id":"570f3a8bfd6cad69b8c4ef26"
    },
    "quote":"nisi dolor minim culpa sint nulla aute eu commodo velit anim officia",
    "id":"570f3a8bb4f63ece37f23fd4",
    "imageUrl":"https://www.brainyquote.com/photos_tr/bg_thumbnails/bg_0001.jpg"
  },
  {  
    "shareCount":21282,
    "likeCount":15199,
    "viewCount":5203,
    "topics":[  
      "creativity",
      "life",
      "attitude"
    ],
    "author":{  
      "died":"Monday, November 23, 2015 5:39 PM",
      "born":"Tuesday, December 15, 2015 2:08 PM",
      "profession":"saint",
      "intro":"Lorem et mollit aliquip magna reprehenderit ut ullamco quis. Deserunt qui tempor cillum ad qui. Veniam culpa eu quis irure ullamco pariatur laborum eiusmod aute qui ea ad ullamco sit. Id mollit dolor enim do. Dolor adipisicing reprehenderit proident cupidatat incididunt eiusmod eu id.\n\nLaboris do consequat velit cillum amet esse id excepteur cupidatat sint. Id adipisicing mollit esse consectetur consectetur tempor aute consectetur aute esse aliquip officia. Officia nulla qui anim in nostrud. Non incididunt sunt cupidatat consectetur minim dolore et aliquip enim tempor commodo. Nisi deserunt ad nulla tempor qui. Elit ullamco tempor ex minim dolor.",
      "name":"Hyde Stone",
      "id":"570f3a8bfceeb8984b2f75f4"
    },
    "quote":"eu consectetur nisi sunt laborum exercitation minim magna nisi consectetur magna est",
    "id":"570f3a8b51c59f0a2e5c5037",
    "imageUrl":"https://www.brainyquote.com/photos_tr/bg_thumbnails/bg_0001.jpg"
  },
  {  
    "shareCount":28727,
    "likeCount":17038,
    "viewCount":13091,
    "topics":[  
      "creativity",
      "life",
      "attitude"
    ],
    "author":{  
      "died":"Monday, August 17, 2015 2:08 PM",
      "born":"Tuesday, August 19, 2014 6:57 PM",
      "profession":"artist",
      "intro":"Excepteur nulla laboris minim reprehenderit Lorem veniam ut consequat commodo deserunt velit. Consectetur amet reprehenderit sit irure in sit. Veniam in sit amet est enim excepteur eu ut excepteur consequat consectetur ut. Veniam est labore incididunt ullamco ad sint veniam est veniam aute dolor deserunt. Aliqua laborum aute eiusmod duis consequat laboris velit velit ipsum. Duis veniam ea reprehenderit dolore duis irure laborum enim.\n\nMagna reprehenderit esse ullamco cillum duis. Do incididunt dolore proident velit pariatur cillum. Officia duis proident reprehenderit ex fugiat duis commodo voluptate do laborum sunt velit labore id. Sunt cillum deserunt et nisi consequat amet irure exercitation duis culpa cupidatat occaecat eu proident.",
      "name":"Snyder Stephenson",
      "id":"570f3a8b1db897a085abe603"
    },
    "quote":"magna quis ut velit magna eiusmod officia quis adipisicing eiusmod ut aute",
    "id":"570f3a8bdabcd82be4140914",
    "imageUrl":"https://www.brainyquote.com/photos_tr/bg_thumbnails/bg_0001.jpg"
  },
  {  
    "shareCount":29169,
    "likeCount":15100,
    "viewCount":2704,
    "topics":[  
      "creativity",
      "life",
      "attitude"
    ],
    "author":{  
      "died":"Saturday, December 20, 2014 12:36 PM",
      "born":"Saturday, March 29, 2014 12:35 AM",
      "profession":"actor",
      "intro":"Nostrud in qui veniam cupidatat ut velit nisi pariatur nostrud labore est irure non. Dolor adipisicing officia eiusmod laboris. Ex anim officia anim occaecat est. Eiusmod minim deserunt fugiat mollit elit culpa magna cupidatat voluptate. Cupidatat ut anim sit voluptate ipsum eu. Occaecat in fugiat id enim ipsum ad ullamco do Lorem commodo commodo consectetur Lorem commodo. Cillum ut magna ut pariatur labore non proident cillum eu ullamco.\n\nAmet dolor do cillum id cupidatat nisi. Incididunt deserunt nisi exercitation eiusmod minim. Qui incididunt sit officia mollit amet culpa est anim sit deserunt voluptate magna veniam laborum. Culpa occaecat nulla ullamco ea aliquip ad mollit et aliqua laborum excepteur pariatur. Do ullamco fugiat dolor amet voluptate duis magna aute sint.",
      "name":"Beatrice Sutton",
      "id":"570f3a8bcdbcd3b7995571a5"
    },
    "quote":"officia laboris pariatur exercitation esse deserunt in sint Lorem adipisicing ex non",
    "id":"570f3a8bbd9b28b9311a4449",
    "imageUrl":"https://www.brainyquote.com/photos_tr/bg_thumbnails/bg_0001.jpg"
  },
  {  
    "shareCount":3871,
    "likeCount":8460,
    "viewCount":29251,
    "topics":[  
      "creativity",
      "life",
      "attitude"
    ],
    "author":{  
      "died":"Monday, November 30, 2015 7:39 AM",
      "born":"Sunday, July 26, 2015 7:23 PM",
      "profession":"philosopher",
      "intro":"Reprehenderit aute sit cillum consectetur cupidatat. Lorem ullamco velit exercitation magna do eu deserunt magna veniam nostrud laboris. Aliquip dolore irure nostrud ex quis cupidatat. Culpa ullamco culpa nisi nostrud sit.\n\nNulla sint consectetur duis ullamco mollit. In ea aliquip officia cupidatat nostrud enim veniam duis. Tempor quis ullamco ullamco non est in incididunt dolor in dolore aliquip ea sit. Aute et in in dolore magna exercitation dolore mollit fugiat nisi aliqua. Et consequat dolor voluptate incididunt tempor officia incididunt adipisicing ut nostrud labore cillum sint.",
      "name":"Frances Randolph",
      "id":"570f3a8bd03aaff47550c96b"
    },
    "quote":"magna in nisi reprehenderit quis fugiat labore non deserunt mollit sunt ad",
    "id":"570f3a8b396e2c97785a2999",
    "imageUrl":"https://www.brainyquote.com/photos_tr/bg_thumbnails/bg_0001.jpg"
  },
  {  
    "shareCount":10470,
    "likeCount":23865,
    "viewCount":11336,
    "topics":[  
      "creativity",
      "life",
      "attitude"
    ],
    "author":{  
      "died":"Monday, February 24, 2014 11:56 PM",
      "born":"Monday, February 16, 2015 6:10 PM",
      "profession":"athlete",
      "intro":"Enim adipisicing nulla fugiat aliqua eiusmod nostrud proident est. Proident laboris esse aute cillum enim consequat aute nisi et Lorem aliqua esse dolore. Incididunt elit tempor in dolor pariatur et fugiat veniam nulla nisi.\n\nIrure pariatur duis nulla do nostrud consequat do anim elit ea qui aliqua eiusmod. Sint eu nisi mollit ut aliquip aliqua nulla sit aute irure. Veniam exercitation in qui anim amet Lorem irure exercitation velit. In sunt occaecat ut sunt est exercitation voluptate nulla.",
      "name":"Greene Hebert",
      "id":"570f3a8bf4a36de1fad55fd1"
    },
    "quote":"ex irure occaecat veniam proident minim sunt velit nulla velit proident quis",
    "id":"570f3a8b271729e601b1226f",
    "imageUrl":"https://www.brainyquote.com/photos_tr/bg_thumbnails/bg_0001.jpg"
  },
  {  
    "shareCount":25641,
    "likeCount":9568,
    "viewCount":11232,
    "topics":[  
      "creativity",
      "life",
      "attitude"
    ],
    "author":{  
      "died":"Monday, May 12, 2014 9:40 AM",
      "born":"Sunday, July 26, 2015 1:42 PM",
      "profession":"writer",
      "intro":"Proident occaecat dolore pariatur esse nostrud et duis ex. Dolor excepteur ad eiusmod sint proident Lorem. Sunt quis nulla deserunt commodo eiusmod aute est non nostrud adipisicing aliquip fugiat.\n\nElit aliquip id laborum sunt proident tempor. Nisi sunt dolor veniam excepteur nulla pariatur magna enim culpa. Non sunt et dolor quis reprehenderit Lorem Lorem consequat mollit eiusmod quis voluptate excepteur exercitation.",
      "name":"Melton Huffman",
      "id":"570f3a8b9c61e2f7c3c1a098"
    },
    "quote":"pariatur veniam occaecat ad dolore veniam veniam cupidatat incididunt ex incididunt non",
    "id":"570f3a8b4bf4d13d36bec77c",
    "imageUrl":"https://www.brainyquote.com/photos_tr/bg_thumbnails/bg_0001.jpg"
  },
  {  
    "shareCount":7064,
    "likeCount":23213,
    "viewCount":3981,
    "topics":[  
      "creativity",
      "life",
      "attitude"
    ],
    "author":{  
      "died":"Monday, July 27, 2015 6:38 AM",
      "born":"Thursday, September 4, 2014 5:41 AM",
      "profession":"inventor",
      "intro":"Aliqua deserunt id ad minim. Ea ea et qui eu duis. Eiusmod veniam anim voluptate velit esse tempor fugiat irure commodo deserunt anim minim. Lorem elit Lorem in anim laborum ea incididunt. Ex exercitation duis nulla velit tempor consectetur sunt eiusmod do pariatur veniam velit. Consequat consequat pariatur do non aute consectetur do. Laborum ad labore consectetur reprehenderit laboris nostrud aute magna irure.\n\nSint commodo id aute magna tempor nostrud veniam anim. Culpa exercitation magna nisi est elit proident officia minim dolore in id labore proident amet. Eu irure consequat ex incididunt sunt quis qui. Cupidatat duis et nostrud ad nostrud sunt.",
      "name":"Dale Brock",
      "id":"570f3a8b77b54ec5218ff44c"
    },
    "quote":"voluptate consectetur do exercitation enim in commodo consectetur ut ea incididunt proident",
    "id":"570f3a8b7de1018563fb80e2",
    "imageUrl":"https://www.brainyquote.com/photos_tr/bg_thumbnails/bg_0001.jpg"
  },
  {  
    "shareCount":15892,
    "likeCount":5569,
    "viewCount":28504,
    "topics":[  
      "creativity",
      "life",
      "attitude"
    ],
    "author":{  
      "died":"Tuesday, June 16, 2015 6:01 AM",
      "born":"Tuesday, January 27, 2015 4:02 AM",
      "profession":"writer",
      "intro":"Reprehenderit occaecat aliqua esse labore occaecat incididunt enim aliqua deserunt. Ipsum laborum sit voluptate et incididunt ex do sunt adipisicing laborum voluptate occaecat elit. Exercitation nisi dolor eiusmod pariatur eu quis occaecat. Voluptate officia consectetur cillum et cupidatat eu. Ad esse culpa quis culpa sunt ex ea labore reprehenderit. Laborum voluptate cillum voluptate ea nostrud veniam ea ex labore laboris. Ex cupidatat velit ut laborum officia cillum culpa aliquip ullamco laborum veniam do.\n\nNon pariatur officia laboris esse aliqua voluptate excepteur laboris duis consequat ut eu. Do do cillum labore veniam pariatur anim enim non nostrud in velit. Proident minim ad minim nisi sit occaecat tempor culpa aute et in veniam ex. Laborum dolor ad aute eiusmod eu quis consectetur voluptate labore ad labore non non do. Excepteur consectetur adipisicing nulla et qui proident.",
      "name":"Vanessa Parrish",
      "id":"570f3a8bb61a02070a6e438d"
    },
    "quote":"sint mollit cillum nulla aute eu consequat aliquip minim sint minim proident",
    "id":"570f3a8b47e034b6f6b49b4a",
    "imageUrl":"https://www.brainyquote.com/photos_tr/bg_thumbnails/bg_0001.jpg"
  },
  {  
    "shareCount":21238,
    "likeCount":9182,
    "viewCount":25752,
    "topics":[  
      "creativity",
      "life",
      "attitude"
    ],
    "author":{  
      "died":"Saturday, March 29, 2014 9:47 PM",
      "born":"Sunday, February 15, 2015 9:54 PM",
      "profession":"artist",
      "intro":"Proident labore minim fugiat officia dolor aute occaecat ut fugiat. Est incididunt voluptate ullamco deserunt est consequat nostrud. Laborum ea Lorem aliquip ipsum dolore labore quis laborum ipsum esse eu.\n\nConsectetur consequat fugiat qui Lorem aliqua officia sint enim. Labore ad commodo et anim dolore do do proident est. Ex ex ipsum ut minim consequat adipisicing. Magna do do et aliqua aliqua laborum.",
      "name":"Livingston Soto",
      "id":"570f3a8b4e0bf6ba84cb5acb"
    },
    "quote":"commodo ea nisi dolor officia ex dolore non est id cillum laborum",
    "id":"570f3a8b05adb375ab8e73c2",
    "imageUrl":"https://www.brainyquote.com/photos_tr/bg_thumbnails/bg_0001.jpg"
  },
  {  
    "shareCount":20140,
    "likeCount":12028,
    "viewCount":18625,
    "topics":[  
      "creativity",
      "life",
      "attitude"
    ],
    "author":{  
      "died":"Wednesday, April 29, 2015 12:15 PM",
      "born":"Saturday, January 23, 2016 10:31 AM",
      "profession":"writer",
      "intro":"Officia adipisicing esse enim proident. Magna incididunt est deserunt et ullamco culpa sint ea occaecat nisi. Id amet pariatur non duis laboris nisi commodo. Consequat anim irure mollit excepteur anim. Ex tempor amet nisi nisi.\n\nEnim sint duis pariatur aliqua duis non irure cupidatat do veniam nostrud anim mollit. Anim veniam dolore amet ea deserunt eu consequat laboris excepteur laborum veniam minim. Ipsum proident tempor magna dolor Lorem labore magna ex minim aliquip nostrud non cillum cupidatat. Fugiat aute quis ad sunt ex sit mollit. Irure dolor minim nisi consequat incididunt duis. Laboris ex proident consequat nostrud proident est sint dolore adipisicing sint mollit commodo. Laboris consectetur veniam fugiat excepteur veniam enim cillum esse veniam sit reprehenderit.",
      "name":"Liliana Aguilar",
      "id":"570f3a8b7bfe79483e9d79ba"
    },
    "quote":"nulla veniam consequat id ea non excepteur do eu exercitation consequat fugiat",
    "id":"570f3a8b8047c1e0e641df71",
    "imageUrl":"https://www.brainyquote.com/photos_tr/bg_thumbnails/bg_0001.jpg"
  },
  {  
    "shareCount":5785,
    "likeCount":9170,
    "viewCount":19672,
    "topics":[  
      "creativity",
      "life",
      "attitude"
    ],
    "author":{  
      "died":"Monday, February 8, 2016 8:41 AM",
      "born":"Monday, March 21, 2016 2:56 PM",
      "profession":"politician",
      "intro":"Enim velit aliqua ad irure fugiat deserunt. Ut nisi incididunt sit aute aliqua veniam incididunt occaecat ad commodo ullamco duis laborum laboris. Veniam eu ut id mollit proident esse veniam consectetur incididunt ad adipisicing culpa labore. Consequat veniam ex veniam fugiat dolor.\n\nIrure ea incididunt irure magna ea commodo. Eu nostrud incididunt nostrud eiusmod dolor in occaecat aliquip sunt. Ut ullamco nulla enim occaecat ad consequat nostrud irure velit irure elit.",
      "name":"Susan Hardy",
      "id":"570f3a8bf2f346ee7548a745"
    },
    "quote":"tempor excepteur commodo sit mollit do velit sit mollit occaecat esse eu",
    "id":"570f3a8bfda633ed90913ab2",
    "imageUrl":"https://www.brainyquote.com/photos_tr/bg_thumbnails/bg_0001.jpg"
  },
  {  
    "shareCount":8976,
    "likeCount":29530,
    "viewCount":3085,
    "topics":[  
      "creativity",
      "life",
      "attitude"
    ],
    "author":{  
      "died":"Sunday, June 29, 2014 5:17 PM",
      "born":"Monday, September 15, 2014 1:42 AM",
      "profession":"celebrity",
      "intro":"Reprehenderit proident consectetur enim occaecat culpa ipsum irure. Irure quis ut excepteur proident ut labore commodo proident culpa consectetur. Aliquip ut cillum incididunt magna voluptate laborum magna deserunt nulla aute ipsum ea. Velit qui et fugiat enim cupidatat nisi non et irure. Cillum deserunt voluptate proident minim. Sit occaecat dolor ex aliquip dolor.\n\nNostrud est irure aute sit pariatur velit duis sit veniam eu sunt commodo cupidatat exercitation. Deserunt consectetur sint voluptate duis in nulla adipisicing voluptate laboris esse dolore. Minim magna sunt ea magna dolore et excepteur consectetur dolore culpa. Aliqua deserunt tempor pariatur officia do deserunt laboris proident eu. Incididunt commodo elit mollit minim occaecat exercitation et nisi dolor deserunt qui labore. Est officia sunt incididunt anim incididunt proident exercitation aliqua deserunt dolore ipsum do ullamco exercitation. Nisi aliqua in tempor reprehenderit quis ut pariatur in sit laboris irure adipisicing exercitation ipsum.",
      "name":"Poole Manning",
      "id":"570f3a8bd06a958c3136edd2"
    },
    "quote":"laboris reprehenderit enim et cupidatat quis labore consequat esse est sint magna",
    "id":"570f3a8b9f8391d0d39af58f",
    "imageUrl":"https://www.brainyquote.com/photos_tr/bg_thumbnails/bg_0001.jpg"
  },
  {  
    "shareCount":8803,
    "likeCount":12538,
    "viewCount":4953,
    "topics":[  
      "creativity",
      "life",
      "attitude"
    ],
    "author":{  
      "died":"Tuesday, December 22, 2015 7:21 PM",
      "born":"Tuesday, February 9, 2016 4:44 AM",
      "profession":"celebrity",
      "intro":"Magna consequat est ea dolor sit cupidatat do mollit duis sint. Incididunt exercitation aliquip amet dolor anim exercitation. Anim incididunt eu est culpa eiusmod ad elit adipisicing aute ea. Nulla reprehenderit Lorem ea eiusmod qui ad nostrud deserunt proident occaecat. Sint non incididunt mollit quis cillum ad sit ut esse dolore aute. Tempor do adipisicing tempor proident voluptate. Eiusmod reprehenderit ut occaecat anim non mollit qui elit magna laboris excepteur in est.\n\nAliquip et aliquip laborum irure dolore aliquip mollit consequat anim aliquip. Aliquip magna Lorem eiusmod anim enim duis quis ea ad ipsum velit. Irure sit mollit proident id ipsum. Consectetur pariatur enim minim qui nisi excepteur tempor laboris nulla nostrud aliquip. Deserunt qui occaecat et tempor dolore voluptate officia.",
      "name":"Rosalie Craig",
      "id":"570f3a8bb9cc47e35b2ddbe0"
    },
    "quote":"cupidatat consequat duis anim Lorem aliqua ea aliqua exercitation aute anim elit",
    "id":"570f3a8b61d5cf514f65a591",
    "imageUrl":"https://www.brainyquote.com/photos_tr/bg_thumbnails/bg_0001.jpg"
  },
  
]
  constructor() { }

  ngOnInit(): void {
  }
  showPopup(obj){
    this.isShowPopup=true;
    this.currentQuote=obj;
console.log(obj)
  }
  closePopup(){
    this.isShowPopup=false;
  }

}
