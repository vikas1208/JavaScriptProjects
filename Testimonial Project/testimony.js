var leftbtn = document.querySelector('.leftClick');
var rightbtn = document.querySelector('.rightClick');
var author = document.querySelector('.author');
var testimony = document.querySelector('.testimony');


let customers = [] ;

function Customer(author,text){
    this.author = author;
    this.text = text;
}

function createCustomer(author,text){
    let customer = new Customer(author,text);
    customers.push(customer);
}

   
createCustomer('John', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?');
createCustomer('Sandy', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock');
createCustomer('Amy', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.');
createCustomer('Tyrell', 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.');
createCustomer('Wanda', 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.');

leftbtn.addEventListener('click',displayTestimony);
rightbtn.addEventListener('click',displayTestimony);

function displayTestimony(){
  var idx =  ( parseInt(Math.random()*10)) % customers.length;
  
  author.innerHTML  = customers[idx].author;
  testimony.innerText  = customers[idx].text;
}