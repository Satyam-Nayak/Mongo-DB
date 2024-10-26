test> use Flipkart
switched to db Flipkart
Flipkart> db.createCollection('Mobile',{ capped:true,size:5000,max:5})
{ ok: 1 }
Flipkart> db.Mobile.insertOne({name:'iPhone 16', price: 89999, brand:'Apple',sim:true,features:['5G','OLED Display','Face ID'],
... store:{ house_no: '1A',
... location: 'BTM 1st Stage',
... street: 'btm stage1',
... state: 'Karnataka',
... pincode: 560076
... }, qantity:10
... })
{
  acknowledged: true,
  insertedId: ObjectId('671d32f509e72384ba86b01d')
}
Flipkart> db.Mobile.find()
[
  {
    _id: ObjectId('671d32f509e72384ba86b01d'),
    name: 'iPhone 16',
    price: 89999,
    brand: 'Apple',
    sim: true,
    features: [ '5G', 'OLED Display', 'Face ID' ],
    store: {
      house_no: '1A',
      location: 'BTM 1st Stage',
      street: 'btm stage1',
      state: 'Karnataka',
      pincode: 560076
    },
    qantity: 10
  }
]
Flipkart> db.Mobile.insertOne({ name: 'Samsung S21 FE', price: 39999, brand: 'Samsung', sim: true, features: ['5G', 'SOLED Display', 'Face ID'], store: { house_no: '1N', location: 'BTM 2nd Stage', street: 'btm stage2', state: 'Karnataka', pincode: 560076 }, qantity: 3 })
{
  acknowledged: true,
  insertedId: ObjectId('671d337709e72384ba86b01e')
}
Flipkart> db.Mobile.insertOne({ name: 'Micromax Canvas', price:20999, brand: 'Micromax IN', sim: true, features: ['4G', 'SOLED Display', 'Face ID'], store: { house_no: '1S', location: 'BTM 4th Stage', street: 'btm stage4', state: 'Karnataka', pincode: 560076 }, qantity: 12 })
{
  acknowledged: true,
  insertedId: ObjectId('671d343409e72384ba86b01f')
}
Flipkart> db.Mobile.insertOne({ name: 'Nothing Phone 1', price:42500, brand: 'Nothing', sim: true, features: ['5G', 'SOLED Display', 'Face ID'], store: { house_no: '12A', location: 'Mg Street', street: 'MG Road', state: 'Karnataka', pincode: 560076 }, qantity: 16 })
{
  acknowledged: true,
  insertedId: ObjectId('671d349009e72384ba86b020')
}
Flipkart> db.Mobile.insertOne({ name: 'iPad Air 5th Gen', price:134050, brand: 'Apple', sim: false, features: ['5G', 'Super AMOLED Display', 'Face ID'], store: { house_no: '32D', location: 'Udala', street: 'Jadida', state: 'Odisha', pincode: 757040 }, qantity: 6 })
{
  acknowledged: true,
  insertedId: ObjectId('671d353009e72384ba86b021')
}
Flipkart> db.Mobile.find()
[
  {
    _id: ObjectId('671d32f509e72384ba86b01d'),
    name: 'iPhone 16',
    price: 89999,
    brand: 'Apple',
    sim: true,
    features: [ '5G', 'OLED Display', 'Face ID' ],
    store: {
      house_no: '1A',
      location: 'BTM 1st Stage',
      street: 'btm stage1',
      state: 'Karnataka',
      pincode: 560076
    },
    qantity: 10
  },
  {
    _id: ObjectId('671d337709e72384ba86b01e'),
    name: 'Samsung S21 FE',
    price: 39999,
    brand: 'Samsung',
    sim: true,
    features: [ '5G', 'SOLED Display', 'Face ID' ],
    store: {
      house_no: '1N',
      location: 'BTM 2nd Stage',
      street: 'btm stage2',
      state: 'Karnataka',
      pincode: 560076
    },
    qantity: 3
  },
  {
    _id: ObjectId('671d343409e72384ba86b01f'),
    name: 'Micromax Canvas',
    price: 20999,
    brand: 'Micromax IN',
    sim: true,
    features: [ '4G', 'SOLED Display', 'Face ID' ],
    store: {
      house_no: '1S',
      location: 'BTM 4th Stage',
      street: 'btm stage4',
      state: 'Karnataka',
      pincode: 560076
    },
    qantity: 12
  },
  {
    _id: ObjectId('671d349009e72384ba86b020'),
    name: 'Nothing Phone 1',
    price: 42500,

Flipkart> use Amazon
switched to db Amazon
Amazon> db.createCollection('Product')
{ ok: 1 }
Amazon> db.Product.insertOne({Pname:'Shirts(Man)',Price:1250,brand: 'US Polo'})
{
  acknowledged: true,
  insertedId: ObjectId('671d364909e72384ba86b022')
}
Amazon> db.Product.insertOne({Pname:'Pants(Man)',Price:2500 ,brand: 'Flying Machine'})
{
  acknowledged: true,
  insertedId: ObjectId('671d366c09e72384ba86b023')
}
Amazon> db.Product.insertOne({Pname:'Sky Bags(travel bags)',Price:1500 ,brand: 'Sky Bags'})
{
  acknowledged: true,
  insertedId: ObjectId('671d369809e72384ba86b024')
}
Amazon> db.Product.insertOne({Pname:'Phone(Nothing Phone 1)',Price:39500 ,brand: 'Nothing'})
{
  acknowledged: true,
  insertedId: ObjectId('671d36c309e72384ba86b025')
}
Amazon> db.Product.insertOne({Pname: 'Nike Air Max Shoes', Price: 8999, brand: 'Nike'})
{
  acknowledged: true,
  insertedId: ObjectId('671d372009e72384ba86b026')
}
Amazon> db.Product.insertOne({Pname: 'Philips Air Fryer', Price: 7999, brand: 'Philips'})
{
  acknowledged: true,
  insertedId: ObjectId('671d372d09e72384ba86b027')
}
Amazon> db.Product.insertOne({Pname: 'Tommy Hilfiger T-Shirt', Price: 1499, brand: 'Tommy Hilfiger'})
{
  acknowledged: true,
  insertedId: ObjectId('671d376209e72384ba86b028')
}
Amazon> db.Product.insertOne({Pname: 'H&M Cotton Hoodie', Price: 1999, brand: 'H&M'})
{
  acknowledged: true,
  insertedId: ObjectId('671d376c09e72384ba86b029')
}
Amazon> db.Product.insertOne({Pname: 'LG Refrigerator', Price: 18999, brand: 'LG'})
{
  acknowledged: true,
  insertedId: ObjectId('671d378709e72384ba86b02a')
}
Amazon> db.Product.insertOne({Pname: 'Maggi', Price: 12, brand: 'Nestle'})
{
  acknowledged: true,
  insertedId: ObjectId('671d37cf09e72384ba86b02b')
}
Amazon> use Diwali
switched to db Diwali
Diwali> db.createCollection('Crackers')
{ ok: 1 }
Diwali> db.crackers.insertOne({name: 'Sutli Bomb', price: 20, brand: 'Standard Fireworks'})
{
  acknowledged: true,
  insertedId: ObjectId('671d397f09e72384ba86b02c')
}
Diwali> db.crackers.insertOne({name: 'Chocolate Bomb', price: 15, brand: 'Sri Kaliswari Fireworks'})
{
  acknowledged: true,
  insertedId: ObjectId('671d398b09e72384ba86b02d')
}
Diwali> db.crackers.insertOne({name: 'Bullet Bomb', price: 10, brand: 'Cock Brand'})
{
  acknowledged: true,
  insertedId: ObjectId('671d399709e72384ba86b02e')
}
Diwali> db.crackers.insertOne({name: 'Chain Bomb', price: 40, brand: 'Standard Fireworks'})
{
  acknowledged: true,
  insertedId: ObjectId('671d39a109e72384ba86b02f')
}
Diwali> db.crackers.insertOne({name: 'Nodia Bomb', price: 50, brand: 'Satyam Fireworks'})
{
  acknowledged: true,
  insertedId: ObjectId('671d39bc09e72384ba86b030')
}
Diwali> db.createCollection('crackers')
{ ok: 1 }
Diwali>

Assignment 1 by sreenivansan sir
