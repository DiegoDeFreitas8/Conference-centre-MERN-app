//created a test for an async function that uses fetch
//used an api to get the first objects event name 
//and used expect().toBe()
//you just need to take CheckJWTToken out of the route and change it from get to post 
//in frontend and backend
test('should return wwww', async () => {
    let response = await fetch('http://localhost:8080/getEvents');
    let data = await response.json();
    let outcome = data[0].event;
    expect(outcome).toBe('wwww');
})

//created a test for an async function that uses fetch
//used an api to get the first objects event time 
//and used expect().toBe()
//you just need to take CheckJWTToken out of the route and change it from get to post 
//in frontend and backend
test('should return 03:00', async () => {
    let response = await fetch('http://localhost:8080/getEvents');
    let data = await response.json();
    let outcome = data[0].time;
    expect(outcome).toBe('03:00');
})