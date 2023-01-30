import generateName from "./generateName"
import './styles/main.css'
import randomnamelogo from './assets/namelogo.png'

const randomImg = document.getElementById('randomImg')

randomImg.src = randomnamelogo

const nameBtn = document.querySelector('.nameBtn')

nameBtn.addEventListener('click', generateName)

generateName()