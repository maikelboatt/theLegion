function randomizer(){
    maleName1 = ['Daniel', 'Michael', 'Clement', 'David', 'Benjamin'];
    maleName2 = ['Issac', 'Peter', 'James', 'Kenneth', 'Enoch'];
    maleName3 = ['Caleb', 'Elvis', 'Abel', 'Julius', 'Elvis'];

    femaleName1 = ['Sandra', 'Mavis', 'Bella', 'Vanessa', 'Chelsea'];
    femaleName2 = ['Janet', 'Sophia', 'Diana', 'Cassandra', 'Charity'];
    femaleName3 = ['Emma', 'Priscilla', 'Dorothy', 'Mable', 'Kristina'];

    rand1 = Math.floor(Math.random * maleName1.length);
    rand2 = Math.floor(Math.random * femaleName1.length);

    
    var option1 = maleName1[rand1] + ' would be a good husband to ' + femaleName1[rand2];

    var first = document.getElementById('mn1');
    first.textContent = option1;

}