export default async function getAdvice() {
    let advice = await fetch('https://api.adviceslip.com/advice').then(res => res.json())
    return advice.slip
}