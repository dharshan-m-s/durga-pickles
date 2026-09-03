export const products = [
  { id:'cut-mango-pickle', name:'Cut Mango Pickle', category:'Pickles', size:'500g', image:'/products/originals/cut-mango-pickle.jpg', description:'Durga Cut Mango Pickle. Net weight: 500g.' },
  { id:'avakkai-mango-pickle', name:'Avakkai Mango Pickle', category:'Pickles', size:'500g', image:'/products/originals/avakkai-mango-pickle.jpg', description:'Durga Avakkai Mango Pickle. Net weight: 500g.' },
  { id:'tender-mango-pickle', name:'Tender Mango Pickle', category:'Pickles', size:'500g', image:'/products/originals/tender-mango-pickle.jpg', description:'Durga Tender Mango Pickle. Net weight: 500g.' },
  { id:'lime-pickle', name:'Lime Pickle', category:'Pickles', size:'500g', image:'/products/originals/lime-pickle.jpg', description:'Durga Lime Pickle. Net weight: 500g.' },
  { id:'pullinji-pickle', name:'Pullinji Pickle', category:'Pickles', size:'200g', image:'/products/originals/pullinji-pickle.jpg', description:'Durga Pullinji Pickle. Net weight: 200g.' },
  { id:'rice-kondattam', name:'Rice Kondattam', category:'Kondattam', size:'200g', image:'/products/originals/rice-kondattam.jpg', description:'Durga Rice Kondattam. Net weight: 200g.' },
  { id:'payar-kondattam', name:'Payar Kondattam', category:'Kondattam', size:'100g', image:'/products/originals/payar-kondattam.jpg', description:'Durga Payar Kondattam. Net weight: 100g.' },
  { id:'curd-chilli', name:'Curd Chilli', category:'Kondattam', size:'100g', image:'/products/originals/curd-chilli.jpg', description:'Durga Curd Chilli. Net weight: 100g.' },
  { id:'coconut-chammandhi-podi', name:'Coconut Chammandhi Podi', category:'Powders', size:'100g', image:'/products/originals/coconut-chammandhi-podi.jpg', description:'Durga Coconut Chammandhi Podi. Net weight: 100g.' },
  { id:'chutney-powder', name:'Chutney Powder', category:'Powders', size:'100g', image:'/products/originals/chutney-powder.jpg', description:'Durga Chutney Powder. Net weight: 100g.' },
];
export const categories = ['All', ...new Set(products.map(p => p.category))];
