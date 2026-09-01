export const products = [
  { id:'cut-mango-pickle', name:'Cut Mango Pickle', category:'Pickles', size:'500g', image:'/products/cut-mango-pickle-studio.jpg', description:'Durga Cut Mango Pickle. Net weight: 500g.' },
  { id:'avakkai-mango-pickle', name:'Avakkai Mango Pickle', category:'Pickles', size:'500g', image:'/products/avakkai-mango-pickle-studio.jpg', description:'Durga Avakkai Mango Pickle. Net weight: 500g.' },
  { id:'tender-mango-pickle', name:'Tender Mango Pickle', category:'Pickles', size:'500g', image:'/products/tender-mango-pickle-studio.jpg', description:'Durga Tender Mango Pickle. Net weight: 500g.' },
  { id:'lime-pickle', name:'Lime Pickle', category:'Pickles', size:'500g', image:'/products/lime-pickle-studio.jpg', description:'Durga Lime Pickle. Net weight: 500g.' },
  { id:'pullinji-pickle', name:'Pullinji Pickle', category:'Pickles', size:'200g', image:'/products/pullinji-pickle-studio.jpg', description:'Durga Pullinji Pickle. Net weight: 200g.' },
  { id:'rice-kondattam', name:'Rice Kondattam', category:'Kondattam', size:'200g', image:'/products/rice-kondattam-studio.jpg', description:'Durga Rice Kondattam. Net weight: 200g.' },
  { id:'payar-kondattam', name:'Payar Kondattam', category:'Kondattam', size:'100g', image:'/products/payar-kondattam-studio.jpg', description:'Durga Payar Kondattam. Net weight: 100g.' },
  { id:'curd-chilli', name:'Curd Chilli', category:'Kondattam', size:'100g', image:'/products/curd-chilli-studio.jpg', description:'Durga Curd Chilli. Net weight: 100g.' },
  { id:'chutney-powder', name:'Chutney Powder', category:'Powders', size:'100g', image:'/products/chutney-powder-studio.jpg', description:'Durga Chutney Powder. Net weight: 100g.' },
];
export const categories = ['All', ...new Set(products.map(p => p.category))];
