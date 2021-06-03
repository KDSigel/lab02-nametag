
const submitBtn = document.getElementById('submit-btn');
const inputField = document.getElementById('input-field');
const newName = document.getElementById('new-name')
const colorField = document.getElementById('color-field');
const topSection = document.getElementById('top-section');
const colorBtn = document.getElementById('color-btn');
const ourPronouns = document.getElementById('our-pronouns');
const pronounBtn = document.getElementById('pronoun-btn');
const pronounField = document.getElementById('pronoun-field');
const changeFontBtn = document.getElementById('font-btn');

submitBtn.addEventListener('click', ()=>{
    console.log(inputField.value);
    console.log(newName.textContent);
    newName.textContent = inputField.value;
});
colorBtn.addEventListener('click', ()=>{
    console.log(colorField.value);
    topSection.style.backgroundColor = colorField.value;
});
pronounBtn.addEventListener('click', ()=>{
    console.log(inputField.value);
    console.log(ourPronouns.textContent);
    ourPronouns.textContent = pronounField.value;
});
changeFontBtn.addEventListener('click', ()=>{
    newName.style.fontFamily = 'Times New Roman, Times, serif';
});