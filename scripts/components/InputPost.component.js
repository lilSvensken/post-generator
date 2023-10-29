export function InputPostComponent(postRef) {
  postRef.oninput = () => {
    const parts = postRef.innerText.split('`');
    if (parts.length > 2) {
      postRef.innerText = `${ parts[0] }<b>${ parts[1] }</b>${ parts[2] }`;
    }
  }
}
