(function () {
  const toc = document.querySelector('#page-nav')

  // Select each header
  const sections = document.querySelectorAll('main h1')
  sections.forEach((section, id) => {
    // Create the header link
    toc.innerHTML += '<div id="link_' + section.id + '" class="md-nav__item"><a class="md-nav__link" href="#' + section.id + '" title="' + section.textContent + '">' + section.textContent + '</a></div>'

    // Create the sub links container
    const children = document.createElement('nav')
    children.className = 'md-nav'
    children.innerHTML = '<ul class="md-nav__list"></ul>'

    // Select all the sub headers and add them to the sub links container
    let contenders = section.nextElementSibling
    while (contenders && contenders.tagName !== 'H1') {
      if (contenders.tagName === 'H2' || contenders.tagName === 'H3') {
        const content = '<li class="md-nav__item"><a class="md-nav__link" href="#' + contenders.id + '" title="' + contenders.textContent + '">' + contenders.textContent + '</a></li>'
        children.firstElementChild.innerHTML += content
      }
      contenders = contenders.nextElementSibling
    }
    document.querySelector('#link_' + section.id).appendChild(children)
  })
})()
