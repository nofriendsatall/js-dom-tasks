import escapeHtml from 'escape-html';

// BEGIN
export default function () {
  const form = document.querySelector('form');
  form.addEventListener('submit', function (event) {

    const { email, name, comment } = event.target.elements;
    const escapedEmail = escapeHtml(email.value);
    const escapedName = escapeHtml(name.value);
    const escapedComment = escapeHtml(comment.value);

    const content = `
      <div>
        <p>Feedback has been sent</p>
        <div>Email: ${escapedEmail}</div>
        <div>Name: ${escapedName}</div>
        <div>Comment: ${escapedComment}</div>
      </div>
    `;

    form.outerHTML = content;
  });
}
// END