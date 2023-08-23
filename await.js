console.log('person1: shows tiket');
console.log('person2: shows tiket');

const preMovie= async ()=>{
    const promiseWifeBringingTicket=new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve('ticket');
     },3000)
    })
    const getPopcorn=new Promise((resolve,reject) => resolve('popcorn'));
    const getButter=new Promise((resolve,reject) => resolve('Butter'));
    const getCooldrink=new Promise((resolve,reject) => resolve('Cooldrink'));

    let ticket=await promiseWifeBringingTicket;
    // console.log(`wife:i have the ${ticket}`)
    // console.log('husband:we should go in')
    // console.log('wife: No i am hungry')

    // let popcorn=await getPopcorn
    // console.log(`husband: i got the ${popcorn}`);
    // console.log('husband:we should go in');
    // console.log('wife:no i want butter');

    // let butter=await getButter;
    // console.log(`husband: i got the ${butter}`);
    // console.log(`husband:we should go in`);
    // console.log('wife:please bring the cool drinks too');

    // let Cooldrink=await getCooldrink
    // console.log(`husband: i got the ${Cooldrink}`);
    // console.log(`husband:we should go in`);
    // console.log('wife: Yeah, we are getting let we should go')

    //for promise all
    let [Popcorn,Butter,Cooldrink]=await Promise.all([getPopcorn,getButter,getCooldrink]);

    console.log(`They bought ${Popcorn},${Butter},${Cooldrink}`);

    return ticket
}

preMovie().then((m)=>console.log(`person3: shows ${m}`));

console.log('person4: shows tiket');
console.log('person5: shows tiket');