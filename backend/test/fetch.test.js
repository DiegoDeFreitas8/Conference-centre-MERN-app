//created a test for an async function that uses fetch
//used an api to get the first objects event name 
//and used expect().toBe()
test('should return AR', async () => {
    let response = await fetch('http://localhost:8080/getEvents');
    let data = await response.json();
    let outcome = data[0].event;
    expect(outcome).toBe('wwww');
})