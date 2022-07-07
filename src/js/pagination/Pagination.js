// const element = document.querySelector('.pagination ul');

// function createPagination(totalPages, page) {
//   let liTag = '';
//   let active;
//   let beforePage = page - 1;
//   let afterPage = page + 1;
//   if (page > 1) {
//     liTag += `<li class="btn prev" onclick="createPagination(totalPages, ${
//       page - 1
//     })"><span> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M12.6667 8H3.33334" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
// <path d="M8.00001 12.6668L3.33334 8.00016L8.00001 3.3335" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>
//  </span></li>`;
//   }

//   if (page > 2) {
//     liTag += `<li class="first numb" onclick="createPagination(totalPages, 1)"><span>1</span></li>`;
//     if (page > 3) {
//       liTag += `<li class="dots"><span>...</span></li>`;
//     }
//   }

//   if (page == totalPages) {
//     beforePage = beforePage - 2;
//   } else if (page == totalPages - 1) {
//     beforePage = beforePage - 1;
//   }

//   if (page == 1) {
//     afterPage = afterPage + 2;
//   } else if (page == 2) {
//     afterPage = afterPage + 1;
//   }

//   for (var plength = beforePage; plength <= afterPage; plength++) {
//     if (plength > totalPages) {
//       continue;
//     }
//     if (plength == 0) {
//       plength = plength + 1;
//     }
//     if (page == plength) {
//       active = 'active';
//     } else {
//       active = '';
//     }
//     liTag += `<li class="numb ${active}" onclick="createPagination(totalPages, ${plength})"><span>${plength}</span></li>`;
//   }

//   if (page < totalPages - 1) {
//     if (page < totalPages - 2) {
//       liTag += `<li class="dots"><span>...</span></li>`;
//     }
//     liTag += `<li class="last numb" onclick="createPagination(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
//   }

//   if (page < totalPages) {
//     liTag += `<li class="btn next" onclick="createPagination(totalPages, ${
//       page + 1
//     })"><span> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M3.33333 8H12.6667" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
// <path d="M8 12.6668L12.6667 8.00016L8 3.3335" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
// </svg> </span></li>`;
//   }
//   element.innerHTML = liTag;
//   return liTag;
// }

export default class Pagination {
  constructor(options) {
    this.el = options.el;
    this.currentPage = options.page;
    this.total = options.totalPages;

    this.el.addEventListener('click', this.#handlePageClick);
    this.#render();
  }

  #handlePageClick = event => {
    const element = event.target.closest('li');
    if (!element || !element.dataset.page) return;

    const page = Number(element.dataset.page);
    typeof this.cb === 'function' && this.cb(element.dataset.page);
    this.currentPage = page;
    this.#render();
  };
  onChange(cb) {
    this.cb = cb;
  }

  #render() {
    let liTag = '';
    let active;
    let beforePage = this.currentPage - 1;
    let afterPage = this.currentPage + 1;
    if (this.currentPage > 1) {
      liTag += `<li class="btn prev" data-page="${
        this.currentPage - 1
      }"><span> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6667 8H3.33334" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.00001 12.6668L3.33334 8.00016L8.00001 3.3335" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 </span></li>`;
    }

    if (this.currentPage > 2) {
      liTag += `<li class="first numb" data-page="1"><span>1</span></li>`;
      if (this.currentPage > 3) {
        liTag += `<li class="dots"><span>...</span></li>`;
      }
    }

    // if (this.currentPage === this.total) {
    //   beforePage = beforePage - 2;
    // }
    // } else if (this.currentPage === this.total - 1) {
    //   beforePage = beforePage - 1;
    // }

    // if (this.currentPage === 1) {
    //   afterPage = afterPage + 2;
    // }
    // } else if (this.currentPage === 2) {
    //   afterPage = afterPage + 1;
    // }

    for (var plength = beforePage; plength <= afterPage; plength++) {
      if (plength > this.total) {
        continue;
      }
      if (plength === 0) {
        plength += 1;
      }
      if (this.currentPage === plength) {
        active = 'active';
      } else {
        active = '';
      }

      liTag += `<li class="numb ${active}" data-page="${plength}"><span>${plength}</span></li>`;
    }

    if (this.currentPage < this.total - 1) {
      if (this.currentPage < this.total - 2) {
        liTag += `<li class="dots"><span>...</span></li>`;
      }
      liTag += `<li class="last numb" data-page="${this.total}"><span>${this.total}</span></li>`;
    }

    if (this.currentPage < this.total) {
      liTag += `<li class="btn next" data-page="${
        this.currentPage + 1
      }"><span> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.33333 8H12.6667" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 12.6668L12.6667 8.00016L8 3.3335" stroke="black" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg> </span></li>`;
    }
    this.el.innerHTML = liTag;
  }
}
