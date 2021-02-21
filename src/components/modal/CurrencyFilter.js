import React from "react";

const CurrencyFilter = () => {
  return (
    <select style={modalSelect} defaultValue={"NGN"}>
      <option value="USD"> USD </option>
      <option value="EUR"> EUR </option>
      <option value="CAD"> CAD </option>
      <option value="AUD"> AUD </option>
      <option value="GBP"> GBP </option>
      <option value="JPY"> JPY </option>
      <option disabled=""> --- </option>
      <option value="AED"> AED </option>
      <option value="AFN"> AFN </option>
      <option value="ALL"> ALL </option>
      <option value="AMD"> AMD </option>
      <option value="ANG"> ANG </option>
      <option value="AOA"> AOA </option>
      <option value="ARS"> ARS </option>
      <option value="AUD"> AUD </option>
      <option value="AWG"> AWG </option>
      <option value="AZN"> AZN </option>
      <option value="BAM"> BAM </option>
      <option value="BBD"> BBD </option>
      <option value="BDT"> BDT </option>
      <option value="BGN"> BGN </option>
      <option value="BIF"> BIF </option>
      <option value="BMD"> BMD </option>
      <option value="BND"> BND </option>
      <option value="BOB"> BOB </option>
      <option value="BRL"> BRL </option>
      <option value="BSD"> BSD </option>
      <option value="BWP"> BWP </option>
      <option value="BZD"> BZD </option>
      <option value="CAD"> CAD </option>
      <option value="CDF"> CDF </option>
      <option value="CHF"> CHF </option>
      <option value="CLP"> CLP </option>
      <option value="CNY"> CNY </option>
      <option value="COP"> COP </option>
      <option value="CRC"> CRC </option>
      <option value="CVE"> CVE </option>
      <option value="CZK"> CZK </option>
      <option value="DJF"> DJF </option>
      <option value="DKK"> DKK </option>
      <option value="DOP"> DOP </option>
      <option value="DZD"> DZD </option>
      <option value="EGP"> EGP </option>
      <option value="ETB"> ETB </option>
      <option value="EUR"> EUR </option>
      <option value="FJD"> FJD </option>
      <option value="FKP"> FKP </option>
      <option value="GBP"> GBP </option>
      <option value="GEL"> GEL </option>
      <option value="GIP"> GIP </option>
      <option value="GMD"> GMD </option>
      <option value="GNF"> GNF </option>
      <option value="GTQ"> GTQ </option>
      <option value="GYD"> GYD </option>
      <option value="HKD"> HKD </option>
      <option value="HNL"> HNL </option>
      <option value="HRK"> HRK </option>
      <option value="HTG"> HTG </option>
      <option value="HUF"> HUF </option>
      <option value="IDR"> IDR </option>
      <option value="ILS"> ILS </option>
      <option value="INR"> INR </option>
      <option value="ISK"> ISK </option>
      <option value="JMD"> JMD </option>
      <option value="JPY"> JPY </option>
      <option value="KES"> KES </option>
      <option value="KGS"> KGS </option>
      <option value="KHR"> KHR </option>
      <option value="KMF"> KMF </option>
      <option value="KRW"> KRW </option>
      <option value="KYD"> KYD </option>
      <option value="KZT"> KZT </option>
      <option value="LAK"> LAK </option>
      <option value="LBP"> LBP </option>
      <option value="LKR"> LKR </option>
      <option value="LRD"> LRD </option>
      <option value="LSL"> LSL </option>
      <option value="MAD"> MAD </option>
      <option value="MDL"> MDL </option>
      <option value="MGA"> MGA </option>
      <option value="MKD"> MKD </option>
      <option value="MMK"> MMK </option>
      <option value="MNT"> MNT </option>
      <option value="MOP"> MOP </option>
      <option value="MRO"> MRO </option>
      <option value="MUR"> MUR </option>
      <option value="MVR"> MVR </option>
      <option value="MWK"> MWK </option>
      <option value="MXN"> MXN </option>
      <option value="MYR"> MYR </option>
      <option value="MZN"> MZN </option>
      <option value="NAD"> NAD </option>
      <option value="NGN"> NGN </option>
      <option value="NIO"> NIO </option>
      <option value="NOK"> NOK </option>
      <option value="NPR"> NPR </option>
      <option value="NZD"> NZD </option>
      <option value="PAB"> PAB </option>
      <option value="PEN"> PEN </option>
      <option value="PGK"> PGK </option>
      <option value="PHP"> PHP </option>
      <option value="PKR"> PKR </option>
      <option value="PLN"> PLN </option>
      <option value="PYG"> PYG </option>
      <option value="QAR"> QAR </option>
      <option value="RON"> RON </option>
      <option value="RSD"> RSD </option>
      <option value="RUB"> RUB </option>
      <option value="RWF"> RWF </option>
      <option value="SAR"> SAR </option>
      <option value="SBD"> SBD </option>
      <option value="SCR"> SCR </option>
      <option value="SEK"> SEK </option>
      <option value="SGD"> SGD </option>
      <option value="SHP"> SHP </option>
      <option value="SLL"> SLL </option>
      <option value="SOS"> SOS </option>
      <option value="SRD"> SRD </option>
      <option value="STD"> STD </option>
      <option value="SZL"> SZL </option>
      <option value="THB"> THB </option>
      <option value="TJS"> TJS </option>
      <option value="TOP"> TOP </option>
      <option value="TRY"> TRY </option>
      <option value="TTD"> TTD </option>
      <option value="TWD"> TWD </option>
      <option value="TZS"> TZS </option>
      <option value="UAH"> UAH </option>
      <option value="UGX"> UGX </option>
      <option value="UYU"> UYU </option>
      <option value="UZS"> UZS </option>
      <option value="VND"> VND </option>
      <option value="VUV"> VUV </option>
      <option value="WST"> WST </option>
      <option value="XAF"> XAF </option>
      <option value="XCD"> XCD </option>
      <option value="XOF"> XOF </option>
      <option value="XPF"> XPF </option>
      <option value="YER"> YER </option>
      <option value="ZAR"> ZAR </option>
      <option value="ZMW"> ZMW </option>
    </select>
  );
};

const modalSelect = {
  maxWidth: 80,
  padding: "7px 12px",
  backgroundColor: "#fff",
  fontSize: 12,
};

export default CurrencyFilter;
