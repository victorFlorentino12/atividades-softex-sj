function checkData() {
    const name = document.getElementById('name').value;
    const salary = parseFloat(document.getElementById('salary').value);
    const age = parseInt(document.getElementById('age').value);
    const diploma = document.getElementById('diploma').checked;

    if (typeof name === 'string' && !isNaN(salary) && typeof age === 'number' && typeof diploma === 'boolean') {
        console.log('Nome:', name, 'Tipo:', typeof name);
        console.log('Salário:', salary, 'Tipo:', typeof salary);
        console.log('Idade:', age, 'Tipo:', typeof age);
        console.log('Possui Diploma:', diploma, 'Tipo:', typeof diploma);
        document.getElementById('result').innerHTML = "Todos os dados estão corretos!";
    } else {
        console.log('Verifique os dados inseridos.');
        document.getElementById('result').innerHTML = "Verifique os dados inseridos.";
    }
}