export default class CountryService {
	constructor() {
		this.baseUri = 'https://restcountries.eu/rest/v2/';
	}

	getResults(uri) {
		return fetch(uri);
	}

	getUri(params) {
		params.searchTerm = params.searchTerm.split(' ').length > 1 ? params.searchTerm.split(' ').join('%20') : params.searchTerm;
		switch (params.searchCriteria) {
			case 'name':
				return this.baseUri + 'name/' + params.searchTerm;
			case 'fullName':
				return this.baseUri + 'name/' + params.searchTerm + '?fullText=true';
			case 'code':
				return this.baseUri + 'aplha?codes=' + params.searchTerm;
			case 'currency':
				return this.baseUri + 'currency/' + params.searchTerm;
			case 'language':
				return this.baseUri + 'lang/' + params.searchTerm;
			case 'capitalCity':
				return this.baseUri + 'capital/' + params.searchTerm;
			case 'callingCode':
				return this.baseUri + 'callingcode/' + params.searchTerm;
			case 'region':
				return this.baseUri + 'region/' + params.searchTerm;
			case 'regionalBloc':
				return this.baseUri + 'regionalbloc/' + params.regionBloc;
		}
	}
}