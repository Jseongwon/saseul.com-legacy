import store from "./store";

export const getters = {
  productsInfo: function () {
    return {
      module: [
        {
          _productNumber: 0,
          _name: "Base",
          _contents:
            "Basic Blockchain Functions\n" +
            "Cryptocurrency\n" +
            "Social Random\n" +
            "Transaction, Request, Accept",
          // _contents: 'Provides basic blockchain functionality',
          _price: "$0",
          _image: "Base.png",
        },
        {
          _productNumber: 1,
          _name: "Issuing Token",
          _contents:
            "Separate Token within Network\n" + "Currency Exchange Available",
          // _contents: 'Essential Modules for Configuring Blockchain Services',
          // _price: '$22,000',
          _image: "IssuingToken.png",
        },
        {
          _productNumber: 2,
          _name: "dExchange",
          _contents:
            "Create/manage Orderbooks\n" +
            "Buying/Selling Ordering and Handling by Designated/Market Price",
          // _contents: 'For the occupations whose main task is to manage the order form, for example, an online shopping mall',
          // _price: '$99,000',
          _image: "dExchange.png",
        },
        {
          _productNumber: 3,
          _name: "SupplyChain",
          _contents:
            "Asymmetric Token Pairs\n" +
            "QR or Barcode Scanning\n" +
            "Product’s Unique Signature (Unique Attestation)",
          // _contents: 'For the occupations with a high risk of falsifying information, for example, valuable goods and art-related industries.',
          // _price: '$77,000',
          _image: "SupplyChain.png",
        },
        {
          _productNumber: 4,
          _name: "Issuing Certificate",
          _contents:
            "Issuing Certificate\n" +
            "Certificate to Token/Coin Interlink\n" +
            "Execution of Funds, Third-party Signature, Redistribution of Cryptographic Information",
          // _contents: 'For the occupations whose main task is to manage various certificates, for example, accounting firms.',
          // _price: '$77,000',
          _image: "IssuingCertificate.png",
        },
        {
          _productNumber: 5,
          _name: "DID",
          _contents:
            "Personal Information Hashing\n" +
            "ID Issuance Rights\n" +
            "First-Time Email-Based Authentication\n" +
            "Telecom Based Authentication",
          // _contents: 'For the occupations occupations requiring strong personal information security, for example, government offices.',
          // _price: '$55,000',
          _image: "DID.png",
        },
        {
          _productNumber: 6,
          _name: "Board",
          _contents:
            "Bulletin Board functions\n" +
            "Writing, Modifying, Deleting, Commenting\n" +
            "Counting Number of Views, Collecting Statistical Functions",
          // _contents: 'For the occupations whose main job is managing bulletin boards, for example, SNS, web community operators',
          // _price: '$44,000',
          _image: "Board.png",
        },
      ],
      pricePolicy: [
        // {
        //   _name: "Lite",
        //   _contents: "Only can use light node",
        //   _price: "$0",
        //   _image: "Lite.png",
        // },
        {
          _productNumber: 7,
          _name: "Community",
          _contents:
            "1-Year Free Trial\n" + "No Arbiter(Storage Management Node)",
          // _price: "$50,000/Year",
          _image: "Community.png",
        },
        {
          _productNumber: 8,
          _name: "Enterprise",
          _contents:
            "Enterprise Version\n" +
            "Perpetual License\n" +
            "Arbiter(Storage Management Node)",
          // _price: "$300,000/Copy",
          _image: "Enterprise.png",
        },
      ],
    };
  },
  purchaseList: function () {
    let data = [];
    const purchaseList = store.state.userInfo.purchaseList;

    const modules = store.getters.productsInfo.module;
    const policies = store.getters.productsInfo.pricePolicy;

    for (let i = 0; i < purchaseList.length; i++) {
      for (let j = 0; j < modules.length; j++) {
        if (purchaseList[i].productNumber === modules[j]._productNumber) {
          data.push({
            productInfo: modules[j],
            licenseNumber: purchaseList[i].licenseNumber,
            purchaseDate: purchaseList[i].purchaseDate,
          });
        }
        for (let j = 0; j < policies.length; j++) {
          if (purchaseList[i].productNumber === policies[j]._productNumber) {
            data.push({
              productInfo: policies[j],
              licenseNumber: purchaseList[i].licenseNumber,
              purchaseDate: purchaseList[i].purchaseDate,
            });
          }
        }
      }
    }
    return data;
  },
};
