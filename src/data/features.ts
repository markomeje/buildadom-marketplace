import Rectangle50 from "../assets/icons/Rectangle50.png";
import Rectangle51 from "../assets/icons/Rectangle51.png";
import Rectangle52 from "../assets/icons/Rectangle52.png";

import Motor from "../assets/icons/Motor.png";
import Love from "../assets/icons/Love.png";
import Search from "../assets/icons/Search.png";

import Marketplace from "../assets/icons/Marketplace.png";
import Api from "../assets/icons/Api.png";
import Store from "../assets/icons/Store.png";
import Manage from "../assets/icons/Manage.png";

export const processFeatures = [
   {
      title: 'Building material marketplace',
      text: [
         'Buildadom’s building material marketplace features the best collection of products from trusted suppliers',
         'Building materials are sourced from a wide range of local and international manufacturers, distributors and suppliers.'
      ],
      icon: Marketplace
   },
   {
      title: 'Use our API to start taking orders and selling on your company\’s website',
      text: [
         'If you already have an existing website, our software engineers will help you set up an online store on your company website with just a few clicks',
         'We can help you automate the process of taking orders from your already-existing customers'
      ],
      icon: Api
   },
   {
      title: 'Create and manage your digital store',
      text: [
         'Easily set up and upload an unlimited number of products to your store',
         'Create a shareable digital catalogue that you can share with prospective customers',
         'Generate a customized link to your store and share it with your customers',
      ],
      icon: Store
   },
   {
      title: 'Manage Procurement',
      text: [
         'Source from verified vendors',
         'Keep a record of your procurement',
         'Easy tracking'
      ],
      icon: Manage
   },
];

export const mainFeatures = [
   {
      title: 'Secured Transactions',
      backgroundIconImage: Rectangle50,
      icon: Love,
      iconBgColor: '#EBBDDD',
      text: 'We sincerely care about how you make your transactions and hence made it easier. Payments are guaranteed through an escrow account to ensure that all parties are happy and satisfied.'
   },
   {
      title: 'Trust and Quality',
      backgroundIconImage: Rectangle51,
      icon: Motor,
      iconBgColor: 'rgba(1, 86, 255, 0.4)',
      text: 'We are on a mission to transform Africa’s building and construction industry, every block we lay lies on a foundation of trust. Quality assurance and delivery is at the heart of everything we do.'
   },
   {
      title: 'Growth',
      backgroundIconImage: Rectangle52,
      icon: Search,
      iconBgColor: 'rgba(255, 184, 0, 0.4)',
      text: 'We are on a journey to grow Africa’s digital economy and we want your business to be part of this growth. Therefore, we would be continuously working hard to provide digital solutions and support you with tools that will enable growth. '
   },
];