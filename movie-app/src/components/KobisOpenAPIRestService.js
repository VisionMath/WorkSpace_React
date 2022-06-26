import axios from "axios";

class KobisOpenAPIRestService {
  constructor(key, host) {
    this.key = "3db39eb1eb85ed2bb889e787679d69c2";
    this.host = host ? host : "http://www.kobis.or.kr";
    this.DAILY_BOXOFFICE_URI = "/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList";
    this.WEEKLY_BOXOFFICE_URI = "/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList";
    this.COM_CODE_LIST_URI = "/kobisopenapi/webservice/rest/code/searchCodeList";
    this.MOVIE_LIST_URI = "/kobisopenapi/webservice/rest/movie/searchMovieList";
    this.MOVIE_INFO_URI = "/kobisopenapi/webservice/rest/movie/searchMovieInfo";
    this.COMPANY_LIST_URI = "/kobisopenapi/webservice/rest/company/searchCompanyList";
    this.COMPANY_INFO_URI = "/kobisopenapi/webservice/rest/company/searchCompanyInfo";
    this.PEOPLE_LIST_URI = "/kobisopenapi/webservice/rest/people/searchPeopleList";
    this.PEOPLE_INFO_URI = "/kobisopenapi/webservice/rest/people/searchPeopleInfo";
  }
  requestGet(key, host, serviceURI, isJson, paramMap) {
    var urlStr = host + serviceURI + (isJson ? ".json" : ".xml");
    var retVal = null;
    // $.extend(paramMap, { key: this.key });
    const data = axios({
      url: urlStr,
      type: "get",
      params: { key: this.key },
    });
    data.then(function (responseData) {
      retVal = responseData;
    });
    // $.ajax({
    //   type: "get",
    //   url: urlStr,
    //   data: paramMap,
    //   success: function (responseData) {
    //     retVal = responseData;
    //   },
    //   error: function (jqXHR, textStatus, err) {
    //     throw new KobisOpenAPIError(jqXHR.responseText);
    //   },
    //   dataType: isJson ? "json" : "xml",
    //   async: false,
    // });
    return retVal;
  }

  getDailyBoxOffice(isJson, paramMap) {
    return this.requestGet(this.key, this.host, this.DAILY_BOXOFFICE_URI, isJson, paramMap);
  }
  getWeeklyBoxOffice(isJson, paramMap) {
    return this.requestGet(this.key, this.host, this.WEEKLY_BOXOFFICE_URI, isJson, paramMap);
  }
  getComCodeList(isJson, paramMap) {
    return this.requestGet(this.key, this.host, this.COM_CODE_LIST_URI, isJson, paramMap);
  }
  getMovieList(isJson, paramMap) {
    return this.requestGet(this.key, this.host, this.MOVIE_LIST_URI, isJson, paramMap);
  }
  getMovieInfo(isJson, paramMap) {
    return this.requestGet(this.key, this.host, this.MOVIE_INFO_URI, isJson, paramMap);
  }
  getCompanyList(isJson, paramMap) {
    return this.requestGet(this.key, this.host, this.COMPANY_LIST_URI, isJson, paramMap);
  }
  getCompnayInfo(isJson, paramMap) {
    return this.requestGet(this.key, this.host, this.COMPANY_INFO_URI, isJson, paramMap);
  }
  getPeopleList(isJson, paramMap) {
    return this.requestGet(this.key, this.host, this.PEOPLE_LIST_URI, isJson, paramMap);
  }
  getPeopleInfo(isJson, paramMap) {
    return this.requestGet(this.key, this.host, this.PEOPLE_INFO_URI, isJson, paramMap);
  }
}
class KobisOpenAPIError {
  constructor(message) {
    this.message = message;
  }
}
// KobisOpenAPIError.prototype = new Error();

export default KobisOpenAPIRestService;
export function getDailyBoxOffice(isJson, paramMap) {
  return this.requestGet(this.key, this.host, this.DAILY_BOXOFFICE_URI, isJson, paramMap);
}
