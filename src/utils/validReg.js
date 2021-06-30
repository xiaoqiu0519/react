//用户名正则，4到16位（字母，数字，下划线，减号）
export const uPattern = /^[a-zA-Z0-9_-]{4,16}$/;

//密码规则  以字母开头，长度在6~18之间，只能包含字符、数字和下划线
export const uPassword = /^[a-zA-Z]\w{5,17}$/
//密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
export const uPPattern = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;

//手机号验证规则
export const uTelPhone = /^[1][3,4,5,6,7,8,9][0-9]{9}$/

//邮箱验证规则
export const cEmailReg = /^([\w-_]+(?:\.[\w-_]+)*)@((?:[a-z0-9]+(?:-[a-zA-Z0-9]+)*)+\.[a-z]{2,6})$/i

//身份证号（18位）正则
export const cCP = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;

//包含中文正则
export const uCnPattern = /[\u4E00-\u9FA5]/;

// 纯数字正则
export const uAllnum = /^[0-9]+\.?[0-9]*$/
//正数正则
export const uPosPattern = /^\d*\.?\d+$/;
//正整数正则
export const uPosIntPattern = /^\d+$/;
//负数正则
export const uNegPattern = /^-\d*\.?\d+$/;
//负整数正则
export const uNegIntPattern = /^-\d+$/;
//整数正则
export const uIntPattern = /^-?\d+$/;

/**
  整数或者小数：^[0-9]+\.{0,1}[0-9]{0,2}$
  只能输入数字："^[0-9]*$"。
  只能输入n位的数字："^\d{n}$"。
  只能输入至少n位的数字："^\d{n,}$"。
  只能输入m~n位的数字：。"^\d{m,n}$"
  只能输入零和非零开头的数字："^(0|[1-9][0-9]*)$"。
  只能输入有两位小数的正实数："^[0-9]+(.[0-9]{2})?$"。
  只能输入有1~3位小数的正实数："^[0-9]+(.[0-9]{1,3})?$"。
  只能输入非零的正整数："^\+?[1-9][0-9]*$"。
  只能输入非零的负整数："^\-[1-9][]0-9"*$。
  只能输入长度为3的字符："^.{3}$"。
  只能输入由26个英文字母组成的字符串："^[A-Za-z]+$"。
  只能输入由26个大写英文字母组成的字符串："^[A-Z]+$"。
  只能输入由26个小写英文字母组成的字符串："^[a-z]+$"。
  只能输入由数字和26个英文字母组成的字符串："^[A-Za-z0-9]+$"。
  只能输入由数字、26个英文字母或者下划线组成的字符串："^\w+$"。
  验证用户密码："^[a-zA-Z]\w{5,17}$"正确格式为：以字母开头，长度在6~18之间，只能包含字符、数字和下划线。
  验证是否含有^%&'',;=?$\"等字符："[^%&'',;=?$\x22]+"。
  只能输入汉字："^[\u4e00-\u9fa5]{0,}$"
  验证Email地址："^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$"。
  验证InternetURL："^http://([\w-]+\.)+[\w-]+(/[\w-./?%&=]*)?$"。
  验证电话号码："^(\(\d{3,4}-)|\d{3.4}-)?\d{7,8}$"正确格式为："XXX-XXXXXXX"、"XXXX- XXXXXXXX"、"XXX-XXXXXXX"、"XXX-XXXXXXXX"、"XXXXXXX"和"XXXXXXXX"。
  验证身份证号（15位或18位数字）："^\d{15}|\d{18}$"。
  验证一年的12个月："^(0?[1-9]|1[0-2])$"正确格式为："01"～"09"和"1"～"12"。
  验证一个月的31天："^((0?[1-9])|((1|2)[0-9])|30|31)$"正确格式为；"01"～"09"和"1"～"31"。整数或者小数：^[0-9]+\.{0,1}[0-9]{0,2}$
  只能输入数字："^[0-9]*$"。
  只能输入n位的数字："^\d{n}$"。
  只能输入至少n位的数字："^\d{n,}$"。
  只能输入m~n位的数字：。"^\d{m,n}$"
  只能输入零和非零开头的数字："^(0|[1-9][0-9]*)$"。
  只能输入有两位小数的正实数："^[0-9]+(.[0-9]{2})?$"。
  只能输入有1~3位小数的正实数："^[0-9]+(.[0-9]{1,3})?$"。
  只能输入非零的正整数："^\+?[1-9][0-9]*$"。
  只能输入非零的负整数："^\-[1-9][]0-9"*$。
  只能输入长度为3的字符："^.{3}$"。
  只能输入由26个英文字母组成的字符串："^[A-Za-z]+$"。
  只能输入由26个大写英文字母组成的字符串："^[A-Z]+$"。
  只能输入由26个小写英文字母组成的字符串："^[a-z]+$"。
  只能输入由数字和26个英文字母组成的字符串："^[A-Za-z0-9]+$"。
  只能输入由数字、26个英文字母或者下划线组成的字符串："^\w+$"。
  验证用户密码："^[a-zA-Z]\w{5,17}$"正确格式为：以字母开头，长度在6~18之间，只能包含字符、数字和下划线。
  验证是否含有^%&'',;=?$\"等字符："[^%&'',;=?$\x22]+"。
  只能输入汉字："^[\u4e00-\u9fa5]{0,}$"
  验证Email地址："^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$"。
  验证InternetURL："^http://([\w-]+\.)+[\w-]+(/[\w-./?%&=]*)?$"。
  验证电话号码："^(\(\d{3,4}-)|\d{3.4}-)?\d{7,8}$"正确格式为："XXX-XXXXXXX"、"XXXX- XXXXXXXX"、"XXX-XXXXXXX"、"XXX-XXXXXXXX"、"XXXXXXX"和"XXXXXXXX"。
  验证身份证号（15位或18位数字）："^\d{15}|\d{18}$"。
  验证一年的12个月："^(0?[1-9]|1[0-2])$"正确格式为："01"～"09"和"1"～"12"。
  验证一个月的31天："^((0?[1-9])|((1|2)[0-9])|30|31)$"正确格式为；"01"～"09"和"1"～"31"。
 */
