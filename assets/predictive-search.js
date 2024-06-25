class PredictiveSearch extends HTMLElement {
  constructor() {
    super();
    this.input = this.querySelector('input[type="search"]');
    this.predictiveSearchResults = this.querySelector('#predictive-search');

    this.input.addEventListener('input', this.debounce((event) => {
      this.onChange(event);
    }, 200).bind(this));
  }

  onChange() {
    const searchTerm = this.input.value.trim();
    var dataLimit = this.input.size;
    if (!searchTerm.length) {
      this.close();
      return;
    } else if (/\W+/.test(searchTerm) && !/[a-zA-Z]/.test(searchTerm)) {
      this.getSearchResults('xyz');
      return;
    }

    this.getSearchResults(searchTerm,dataLimit);
  }

  getSearchResults(searchTerm,dataLimit) {
    fetch(`/search/suggest?q=${searchTerm}&resources[type]=product,article&resources[limit]=${dataLimit}&resources[options][fields]=author,product_type,title,variants.title,vendor&section_id=predictive-search`)
      .then((response) => {
        if (!response.ok) {
          var error = new Error(response.status);
          this.close();
          throw error;
        }

        return response.text();
      })
      .then((text) => {
        const resultsMarkup = new DOMParser().parseFromString(text, 'text/html').querySelector('#shopify-section-predictive-search').innerHTML;
        this.predictiveSearchResults.innerHTML = resultsMarkup;
        this.open();
      })
      .catch((error) => {
        this.close();
        throw error;
      });
  }

  open() {
    $('#default-sPanel').hide();
  }

  close() {
    $('input[type=search]').val("");
    $('#default-sPanel').show();
    this.predictiveSearchResults.innerHTML  = '';
  }

  debounce(fn, wait) {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn.apply(this, args), wait);
    };
  }

}

customElements.define('predictive-search', PredictiveSearch);



class PredictiveSearchMobile extends HTMLElement {
  constructor() {
    super();
    this.input = this.querySelector('input[type="search"]');
    this.predictiveSearchResults = this.querySelector('#predictive-search-mobile');

    this.input.addEventListener('input', this.debounce((event) => {
      this.onChange(event);
  }, 200).bind(this));
  }

  onChange() {
    const searchTerm = this.input.value.trim();
    var dataLimit = this.input.size;

    if (!searchTerm.length) {
      this.close();
      return;
    } else if (/\W+/.test(searchTerm) && !/[a-zA-Z]/.test(searchTerm)) {
      this.getSearchResults('xyz');
      return;
    }
    this.getSearchResults(searchTerm,dataLimit);
  }

  getSearchResults(searchTerm,dataLimit) {
    fetch(`/search/suggest?q=${searchTerm}&resources[type]=product,article&resources[limit]=${dataLimit}&resources[options][fields]=author,product_type,title,variants.title,vendor&section_id=predictive-search-mobile`)
        .then((response) => {
      if (!response.ok) {
      var error = new Error(response.status);
      this.close();
      throw error;
    }

    return response.text();
  })
  .then((text) => {
      const resultsMarkup = new DOMParser().parseFromString(text, 'text/html').querySelector('#shopify-section-predictive-search-mobile').innerHTML;
    this.predictiveSearchResults.innerHTML = resultsMarkup;
    this.open();
  })
  .catch((error) => {
      this.close();
    throw error;
  });
  }

  open() {
    this.predictiveSearchResults.style.display = 'block';
    this.predictiveSearchResults.style.position = 'relative';
    this.predictiveSearchResults.style.zIndex = '2'
    $('#mobile-default-sPanel').hide();
  }

  close() {
    $('input[type=search]').val("");
    $('#mobile-default-sPanel').show();
    this.predictiveSearchResults.style.display = 'none';
  }

  debounce(fn, wait) {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn.apply(this, args), wait);
    };
  }

}

customElements.define('predictive-search-mobile', PredictiveSearchMobile);
