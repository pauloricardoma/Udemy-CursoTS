export default function funcao(msg: string) {
  console.log('chamou funcao');
  const body = document.querySelector('body');
  if (body) body.innerHTML = `<p>${msg}</p>`;
}
