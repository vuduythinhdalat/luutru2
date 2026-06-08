/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { MapPin, Phone, Mail, User, ShieldCheck, ChevronLeft, ChevronRight, ArrowLeft, Search, X, Calendar, Lock, Eye, EyeOff, LogOut } from 'lucide-react';

const COUNCIL_MEMBERS = [
  { id: 'c1', name: "Fx. Nguyễn Thanh Lý", role: "Cha Giám Tỉnh" },
  { id: 'c5', name: "GB. Nguyễn Trọng Thịnh", role: "Cha Phụ Tá" },
  { id: 'c2', name: "Giuse Phạm Văn Diệm", role: "Cha Cố Vấn" },
  { id: 'c3', name: "GB. Đặng Kim Đoài", role: "Cha Cố Vấn" },
  { id: 'c4', name: "Laurensô Trần Nam Sách", role: "Cha Cố Vấn" },
  { id: 'c6', name: "Phêrô Ngô Văn Thuyên", role: "Cha Cố Vấn" },
];

const FINANCE_COMMISSION_MEMBERS = [
  { id: 'f1', name: "Laurensô Trần Nam Sách", role: "Cha" },
  { id: 'f2', name: "Phêrô Nguyễn Công Tuấn", role: "Cha" },
  { id: 'f3', name: "Vinh Sơn F. Phạm Trung Hiếu", role: "Cha" },
];

const SPECIAL_APPOINTMENTS = [
  { id: 's1', name: "Giuse Vũ Tuyên Huấn", role: "Cha Thư ký Tỉnh" },
  { id: 's2', name: "Augustinô Vũ Duy Thịnh", role: "Thầy Phụ Tá Thư Ký" },
];

const MEDIA_COMMISSION_MEMBERS = [
  { id: 'm2', name: "Giuse Lê Xuân Thỏa", role: "Cha" },
];

const INVESTIGATION_BOARD_MEMBERS = [
  { id: 'ib1', name: "Giuse Phạm Văn Diệm", role: "Cha" },
  { id: 'ib2', name: "Giuse Vũ Ngọc Hoàng Thái", role: "Cha" },
  { id: 'ib3', name: "Phêrô Trần Văn Minh", role: "Cha" },
];

const LITURGY_BOARD_MEMBERS = [
  { id: 'lb1', name: "Phanxicô Xavie Phạm Trọng Châu", role: "Cha" },
];

const EVANGELIZATION_BOARD_MEMBERS = [
  { id: 'ev1', name: "Phêrô Nguyễn Hữu Sáng", role: "Cha" },
  { id: 'ev2', name: "Phêrô Nguyễn Sơn Luân", role: "Cha" },
  { id: 'ev3', name: "Phaolô Trần Văn Lành", role: "Cha" },
  { id: 'ev4', name: "Giuse Phạm Minh Thành", role: "Cha" },
  { id: 'ev5', name: "Giuse Phạm Thế Hoàn", role: "Cha" },
];

const DIRECTOR_APPOINTMENTS = [
  { id: 'd1', name: "Phêrô Ngô Văn Thuyên", role: "Cha Giám Đốc Thỉnh Viện" },
  { id: 'd2', name: "Phêrô Trần Văn Minh", role: "Cha Giám Đốc Nội Chủng Viện" },
  { id: 'd3', name: "GB. Đặng Kim Đoài", role: "Cha Giám Đốc Học Viện Durando" },
];

const CANONICAL_HOUSES = [
  "Nhà Tỉnh", "Nhà Đà Lạt", "Nhà Ka Đơn - Próh", "Nhà Phương Lâm",
  "Nhà Túc Trưng", "Nhà Nguyễn Kiệm", "Nhà Bình Chánh", "Nhà Nha Trang",
  "Nhà Bưng Kè", "Nhà Đắk Song", "Nhà Xuân Hoà", "Nhà Kon Xơm Lũh",
  "Nhà Tân Lập", "Nhà Măng Đen", "Nhà Làng Nam"
];

const COMMUNITIES = [
  "Cộng Đoàn Khánh Sơn", "Cộng Đoàn Cần Thơ", "Cộng Đoàn Hướng Phương",
  "Cộng Đoàn Bắc Tân Uyên", "Cộng Đoàn Chi Lăng", "Cộng Đoàn Hội Yên",
  "Cộng Đoàn Phong Lôi", "Cộng Đoàn Phình Hồ"
];

const MISSION_LOCATIONS_AD_GENTES = [
  "Hoa Kỳ", "Pháp", "Tây Ban Nha", "Hà Lan", "Pakistan", "Đài Loan", "Papua New Guinea", "Nhật", "Lào", "Costa Rica", "Australia", "Hàn Quốc"
];

const STUDY_ABROAD_LOCATIONS = [
  "Pháp", "Hoa Kỳ", "Ý", "Philippines"
];

const NHA_TINH_CONTACTS = [
  { 
    id: 'nt1', 
    name: "Giuse Phạm văn Diệm", 
    role: "Thành viên", 
    birthDate: "25/06/1979",
    novitiateDate: "25/08/2007",
    vowsDate: "31/01/2013",
    ordinationDate: "01/06/2013",
    phone: "0898732760", 
    email: "pvdiemcm@yahoo.com" 
  },
  { 
    id: 'nt2', 
    name: "Giêrađô Trần Công Dụ", 
    role: "Thành viên", 
    birthDate: "15/08/1945",
    novitiateDate: "13/07/1966",
    vowsDate: "27/09/1973",
    ordinationDate: "04/06/1974",
    phone: "0932633949", 
    email: "ge_tcd2005@yahoo.com" 
  },
  { 
    id: 'nt3', 
    name: "Giuse Vũ Tuyên Huấn", 
    role: "Thư ký Tỉnh", 
    birthDate: "23/10/1976",
    novitiateDate: "15/08/2011",
    vowsDate: "28/07/2017",
    ordinationDate: "05/06/2018",
    phone: "0962448466", 
    email: "tuyenhuancm@gmail.com" 
  },
  { 
    id: 'nt4', 
    name: "Phanxicô Xaviê Nguyễn Thanh Lý", 
    role: "Giám Tỉnh", 
    birthDate: "20/10/1976",
    novitiateDate: "01/09/1998",
    vowsDate: "23/08/2003",
    ordinationDate: "25/05/2006",
    phone: "0913694517", 
    email: "fxthanhly@yahoo.fr" 
  },
  { 
    id: 'nt5', 
    name: "Phêrô Trần Hữu Nhân", 
    role: "Thành viên", 
    birthDate: "02/04/1981",
    novitiateDate: "15/08/2009",
    vowsDate: "28/10/2015",
    ordinationDate: "31/12/2015",
    phone: "0378652363", 
    email: "nhanvinhsoncm@yahoo.com" 
  },
  { 
    id: 'nt6', 
    name: "Phanxicô Xaviê Phạm Văn Sơn", 
    role: "Thành viên", 
    birthDate: "14/06/1967",
    novitiateDate: "01/10/1995",
    vowsDate: "26/09/2000",
    ordinationDate: "13/06/2005",
    phone: "0978546228", 
    email: "fxson05@gmail.com" 
  },
  { 
    id: 'nt7', 
    name: "Augustinô Vũ Duy Thịnh", 
    role: "Thành viên", 
    birthDate: "03/05/1993",
    novitiateDate: "09/08/2019",
    vowsDate: "20/06/2025",
    ordinationDate: "",
    phone: "0913038851", 
    email: "thinh_vuduy@ymail.com" 
  },
  { 
    id: 'nt8', 
    name: "Giuse Lê Xuân Thỏa", 
    role: "Thành viên", 
    birthDate: "10/10/1987",
    novitiateDate: "11/08/2018",
    vowsDate: "20/06/2024",
    ordinationDate: "20/08/2025",
    phone: "0973571663", 
    email: "josxuanthoale@gmail.com" 
  },
  { 
    id: 'nt9', 
    name: "Phêrô Nguyễn Văn Tường", 
    role: "Thành viên", 
    birthDate: "25/05/1991",
    novitiateDate: "09/08/2019",
    vowsDate: "20/06/2025",
    ordinationDate: "",
    phone: "0988478195", 
    email: "pherotuongnguyen@gmail.com" 
  },
  { 
    id: 'nt10', 
    name: "Phaolô Đỗ Nguyên Vũ", 
    role: "Thành viên", 
    birthDate: "02/09/1990",
    novitiateDate: "13/08/2016",
    vowsDate: "29/07/2022",
    ordinationDate: "10/08/2023",
    phone: "0908017351", 
    email: "vudo1110@gmail.com" 
  },
];

const NHA_DA_LAT_CONTACTS = [
  {
    id: 'dl1',
    name: "Gioan Baotixita Nguyễn Trọng Thịnh",
    role: "Thành viên",
    birthDate: "13/03/1969",
    novitiateDate: "01/09/1999",
    vowsDate: "28/08/2004",
    ordinationDate: "17/07/2007",
    phone: "0937330805",
    email: "jbthinhcm@gmail.com"
  },
  {
    id: 'dl2',
    name: "Vinh Sơn F. Phạm Trung Hiếu",
    role: "Thành viên",
    birthDate: "12/07/1987",
    novitiateDate: "15/08/2014",
    vowsDate: "24/07/2020",
    ordinationDate: "08/04/2021",
    phone: "0906959642",
    email: "phamtrunghieu87@gmail.com"
  },
  {
    id: 'dl3',
    name: "Gioan Baotixita Đặng Kim Đoài",
    role: "Thành viên",
    birthDate: "04/08/1972",
    novitiateDate: "01/09/2000",
    vowsDate: "27/08/2005",
    ordinationDate: "21/05/2008",
    phone: "0981782241",
    email: "kimdoaicm@yahoo.com"
  },
  {
    id: 'dl4',
    name: "Phanxicô Xaviê Phạm Trọng Châu",
    role: "Thành viên",
    birthDate: "08/11/1967",
    novitiateDate: "01/10/1996",
    vowsDate: "25/08/2002",
    ordinationDate: "22/07/2005",
    phone: "0979858304",
    email: "Fx_chau@yahoo.com"
  },
  {
    id: 'dl5',
    name: "Phanxicô Xaviê Đặng Tiến Đức",
    role: "Thành viên",
    birthDate: "10/08/1986",
    novitiateDate: "15/08/2014",
    vowsDate: "24/07/2020",
    ordinationDate: "08/04/2021",
    phone: "0798422868",
    email: "fxductd@gmail.com"
  },
  {
    id: 'dl6',
    name: "Phaolô Phạm Quang Hoàng",
    role: "Thành viên",
    birthDate: "10/10/1976",
    novitiateDate: "30/08/2003",
    vowsDate: "12/12/2008",
    ordinationDate: "21/09/2010",
    phone: "0961645421",
    email: "pqhoangpham@gmail.com"
  },
  {
    id: 'dl7',
    name: "Giuse Vũ Quốc Hưng",
    role: "Thành viên",
    birthDate: "14/08/1974",
    novitiateDate: "01/09/2000",
    vowsDate: "27/08/2005",
    ordinationDate: "23/08/2008",
    phone: "0973972355",
    email: "vuhungcm@gmail.com"
  },
  {
    id: 'dl8',
    name: "Gioan Baotixita Trần Minh Hướng",
    role: "Thành viên",
    birthDate: "07/11/1988",
    novitiateDate: "11/08/2018",
    vowsDate: "20/06/2024",
    ordinationDate: "20/08/2025",
    phone: "0975794920",
    email: "jbtranhuongcm@gmail.com"
  },
  {
    id: 'dl9',
    name: "Giuse Nguyễn Văn Lập",
    role: "Thành viên",
    birthDate: "16/03/1945",
    novitiateDate: "27/09/1988",
    vowsDate: "27/09/1990",
    ordinationDate: "05/03/2001",
    phone: "0918692493",
    email: ""
  },
  {
    id: 'dl10',
    name: "Giuse Nguyễn Văn Linh",
    role: "Thành viên",
    birthDate: "23/01/1944",
    novitiateDate: "21/07/1968",
    vowsDate: "1976",
    ordinationDate: "26/09/1976",
    phone: "0936151500",
    email: "nhathovinhson@gmail.com"
  },
  {
    id: 'dl11',
    name: "Phêrô Trần Quốc Hưng Long",
    role: "Thành viên",
    birthDate: "17/04/1972",
    novitiateDate: "01/09/2000",
    vowsDate: "27/08/2005",
    ordinationDate: "27/09/2007",
    phone: "0933915709",
    email: "tllongtran@gmail.com"
  },
  {
    id: 'dl12',
    name: "Giuse Vũ Ngọc Hoàng Thái",
    role: "Thành viên",
    birthDate: "06/10/1982",
    novitiateDate: "14/08/2008",
    vowsDate: "03/05/2014",
    ordinationDate: "03/12/2014",
    phone: "0374179097",
    email: "joshoangthai@yahoo.com"
  },
  {
    id: 'dl13',
    name: "Gioan Baotixita Nguyễn Công Thần",
    role: "Thành viên",
    birthDate: "06/06/1967",
    novitiateDate: "01/10/1994",
    vowsDate: "15/08/1999",
    ordinationDate: "20/05/2004",
    phone: "0965185095",
    email: "jbthancm@yahoo.com"
  },
  {
    id: 'dl14',
    name: "Giuse Phạm Thanh Tính",
    role: "Thành viên",
    birthDate: "10/05/1976",
    novitiateDate: "29/08/2005",
    vowsDate: "29/07/2011",
    ordinationDate: "24/11/2012",
    phone: "0964019990",
    email: "thanhtinhcm76@gmail.com"
  },
  {
    id: 'dl15',
    name: "Phaolô Phạm Văn Trị",
    role: "Thành viên",
    birthDate: "11/12/1947",
    novitiateDate: "21/07/1968",
    vowsDate: "15/08/1976",
    ordinationDate: "26/09/1976",
    phone: "02633701506",
    email: "paultritt@gmail.com"
  },
  {
    id: 'dl16',
    name: "Giuse Nguyễn Viết Út",
    role: "Thành viên",
    birthDate: "14/05/1976",
    novitiateDate: "14/08/2008",
    vowsDate: "03/05/2014",
    ordinationDate: "04/08/2014",
    phone: "0823842778",
    email: "vietut1976@gmail.com"
  },
  {
    id: 'dl17',
    name: "Phaolô B' Nahria Yatine",
    role: "Thành viên",
    birthDate: "19/10/1965",
    novitiateDate: "01/10/1995",
    vowsDate: "26/09/2000",
    ordinationDate: "26/06/2006",
    phone: "0918911169 - 0823842778",
    email: "phaoloyatine@yahoo.com.vn"
  },
];

const NHA_KA_DON_PROH_CONTACTS = [
  {
    id: 'kd1',
    name: "Phêrô Trần Thanh Dũng",
    role: "Thành viên",
    birthDate: "10/11/1972",
    novitiateDate: "29/08/2005",
    vowsDate: "29/07/2011",
    ordinationDate: "24/11/2012",
    phone: "0772694389",
    email: "tulacoiphuc_10@yahoo.com"
  },
  {
    id: 'kd2',
    name: "Giuse Nguyễn Công Hồng Phú",
    role: "Thành viên",
    birthDate: "03/09/1976",
    novitiateDate: "01/09/2000",
    vowsDate: "27/08/2005",
    ordinationDate: "23/08/2008",
    phone: "0372901309",
    email: ""
  },
  {
    id: 'kd3',
    name: "Giuse Nguyễn Tri Hùng",
    role: "Thành viên",
    birthDate: "21/02/1968",
    novitiateDate: "01/10/1996",
    vowsDate: "25/08/2001",
    ordinationDate: "17/12/2004",
    phone: "0909943879",
    email: "nthung2102@gmail.com"
  },
  {
    id: 'kd4',
    name: "Phêrô Lê Văn Hùng",
    role: "Thành viên",
    birthDate: "10/01/1977",
    novitiateDate: "01/09/2000",
    vowsDate: "27/08/2005",
    ordinationDate: "23/08/2008",
    phone: "0937828284",
    email: "terexanhocm@gmail.com"
  },
  {
    id: 'kd5',
    name: "Đaminh Phạm Đăng Khoa",
    role: "Thành viên",
    birthDate: "15/05/1977",
    novitiateDate: "01/09/2000",
    vowsDate: "27/08/2005",
    ordinationDate: "23/08/2008",
    phone: "0976530473",
    email: "dangkphamcm@yahoo.com"
  },
  {
    id: 'kd6',
    name: "Tôma Nguyễn Văn Phong",
    role: "Thành viên",
    birthDate: "25/10/1986",
    novitiateDate: "11/08/2018",
    vowsDate: "20/06/2024",
    ordinationDate: "",
    phone: "0973197312",
    email: "thanhphong0973@gmail.com"
  },
  {
    id: 'kd7',
    name: "Phêrô Nguyễn Tiến Quốc",
    role: "Thành viên",
    birthDate: "27/11/1993",
    novitiateDate: "07/07/2019",
    vowsDate: "20/06/2025",
    ordinationDate: "",
    phone: "0365034793",
    email: "tienquoct@gmail.com"
  },
  {
    id: 'kd8',
    name: "Giuse Nguyễn Đức Thoại",
    role: "Thành viên",
    birthDate: "11/02/1975",
    novitiateDate: "14/08/2008",
    vowsDate: "03/05/2014",
    ordinationDate: "03/12/2014",
    phone: "0342323623",
    email: "ducthoaitn2000@yahoo.com"
  },
  {
    id: 'kd9',
    name: "Giuse Phạm Minh Tuấn",
    role: "Thành viên",
    birthDate: "29/08/1989",
    novitiateDate: "13/08/2016",
    vowsDate: "29/07/2022",
    ordinationDate: "10/08/2023",
    phone: "0979890933",
    email: "josminhtuan89@gmail.com"
  },
  {
    id: 'kd10',
    name: "Tađêô Vương Tăng Khôi",
    role: "Thành viên",
    birthDate: "05/08/1987",
    novitiateDate: "07/07/2019",
    vowsDate: "20/06/2025",
    ordinationDate: "",
    phone: "0915747355",
    email: "no.thing.pin@gmail.com"
  },
];

const NHA_PHUONG_LAM_CONTACTS = [
  {
    id: 'pl1',
    name: "Phaolô Nguyễn Hữu Toan",
    role: "Thành viên",
    birthDate: "06/12/1974",
    novitiateDate: "01/09/1999",
    vowsDate: "28/08/2004",
    ordinationDate: "23/08/2008",
    phone: "0908703765",
    email: "paultoancm@gmail.com"
  },
  {
    id: 'pl2',
    name: "Augustinô Nguyễn Hữu Gia",
    role: "Thành viên",
    birthDate: "10/10/1949",
    novitiateDate: "04/12/1978",
    vowsDate: "27/09/1980",
    ordinationDate: "31/05/1992",
    phone: "0987001064",
    email: "ma.huugiavspl@gmail.com"
  },
  {
    id: 'pl3',
    name: "Phêrô Nguyễn Công Tuấn",
    role: "Thành viên",
    birthDate: "24/06/1969",
    novitiateDate: "01/10/1994",
    vowsDate: "15/08/1999",
    ordinationDate: "16/02/2004",
    phone: "0835202266",
    email: "nguyencongtuancm@gmail.com"
  },
  {
    id: 'pl4',
    name: "Phaolô Nguyễn Tiến Minh",
    role: "Thành viên",
    birthDate: "07/05/1967",
    novitiateDate: "01/10/1997",
    vowsDate: "28/08/2004",
    ordinationDate: "",
    phone: "0987588414",
    email: "paulnguyentienminhcm@gmail.com"
  }
];

const NHA_TUC_TRUNG_CONTACTS = [
  {
    id: 'tt1',
    name: "Micae Phạm Hữu Trung",
    role: "Thành viên",
    birthDate: "29/08/1970",
    novitiateDate: "28/08/2006",
    vowsDate: "29/07/2011",
    ordinationDate: "24/11/2012",
    phone: "0906837141",
    email: "mictrung@gmail.com"
  },
  {
    id: 'tt2',
    name: "Phêrô Hà Văn Báu",
    role: "Thành viên",
    birthDate: "10/01/1941",
    novitiateDate: "13/07/1966",
    vowsDate: "03/04/1973",
    ordinationDate: "15/12/1973",
    phone: "0814520277",
    email: ""
  },
  {
    id: 'tt3',
    name: "Vinh Sơn Ferrier Nguyễn Công Chính",
    role: "Thành viên",
    birthDate: "02/02/1974",
    novitiateDate: "01/09/1998",
    vowsDate: "23/08/2003",
    ordinationDate: "24/01/2006",
    phone: "0907136055",
    email: "ngcongchinh@yahoo.com"
  },
  {
    id: 'tt4',
    name: "Giuse Ya Đô",
    role: "Thành viên",
    birthDate: "04/05/1988",
    novitiateDate: "13/08/2016",
    vowsDate: "29/07/2022",
    ordinationDate: "10/08/2023",
    phone: "0353282636",
    email: "bozudo04@gmail.com"
  },
  {
    id: 'tt5',
    name: "Giuse Nguyễn Minh Giang",
    role: "Thành viên",
    birthDate: "30/10/1979",
    novitiateDate: "15/08/2012",
    vowsDate: "21/07/2018",
    ordinationDate: "20/05/2019",
    phone: "0348767747",
    email: "mgiang3010@yahoo.com"
  },
  {
    id: 'tt6',
    name: "Phanxicô Xaviê Trần Đức Hòa",
    role: "Thành viên",
    birthDate: "02/07/1972",
    novitiateDate: "01/09/1998",
    vowsDate: "23/08/2003",
    ordinationDate: "25/05/2006",
    phone: "0839966038",
    email: "duchoafx72@gmail.com"
  },
  {
    id: 'tt7',
    name: "Vinh Sơn Ferrier Nguyễn Trung Hòa",
    role: "Thành viên",
    birthDate: "29/04/1971",
    novitiateDate: "01/09/1999",
    vowsDate: "28/08/2004",
    ordinationDate: "",
    phone: "0386983578",
    email: "nguyentrhoacm@gmail.com"
  },
  {
    id: 'tt8',
    name: "Phêrô Trần Văn Minh",
    role: "Thành viên",
    birthDate: "30/12/1966",
    novitiateDate: "01/10/1995",
    vowsDate: "26/09/2000",
    ordinationDate: "16/02/2004",
    phone: "0931565054",
    email: "minh_peter1966@yahoo.com.vn"
  },
  {
    id: 'tt9',
    name: "Đaminh Saviô Nguyễn Duy Quang",
    role: "Thành viên",
    birthDate: "12/02/1985",
    novitiateDate: "15/08/2013",
    vowsDate: "24/07/2020",
    ordinationDate: "",
    phone: "0902699764",
    email: "quang_nguyenduy2000@yahoo.com"
  },
  {
    id: 'tt10',
    name: "Phêrô Võ Xuân Quang",
    role: "Thành viên",
    birthDate: "29/10/1986",
    novitiateDate: "15/08/2014",
    vowsDate: "24/07/2020",
    ordinationDate: "08/04/2021",
    phone: "0979079260",
    email: "quangvo86@gmail.com"
  },
  {
    id: 'tt11',
    name: "Giuse Phạm Minh Thành",
    role: "Thành viên",
    birthDate: "15/03/1990",
    novitiateDate: "12/08/2015",
    vowsDate: "20/07/2021",
    ordinationDate: "25/08/2022",
    phone: "0935295203",
    email: "josthanh.pham90@gmail.com"
  },
  {
    id: 'tt12',
    name: "Gioan Baotixita Nguyễn Quốc Thư",
    role: "Thành viên",
    birthDate: "15/05/1945",
    novitiateDate: "13/07/1966",
    vowsDate: "03/04/1973",
    ordinationDate: "15/12/1973",
    phone: "0918887354",
    email: "thu27945@yahoo.com"
  },
];

const NHA_NGUYEN_KIEM_CONTACTS = [
  {
    id: 'nk1',
    name: "Phêrô Phạm Văn Lai",
    role: "Thành viên",
    birthDate: "01/01/1981",
    novitiateDate: "15/08/2011",
    vowsDate: "28/07/2017",
    ordinationDate: "05/06/2018",
    phone: "0702078283",
    email: "laiphamcm@gmail.com"
  },
  {
    id: 'nk2',
    name: "Phêrô Nguyễn Sơn Luân",
    role: "Thành viên",
    birthDate: "11/02/1989",
    novitiateDate: "11/08/2017",
    vowsDate: "23/06/2023",
    ordinationDate: "27/08/2024",
    phone: "0889225103",
    email: "nguyensonluan1989@gmail.com"
  },
  {
    id: 'nk3',
    name: "Luy Lê Tuấn Phước Tâm",
    role: "Thành viên",
    birthDate: "01/06/1989",
    novitiateDate: "13/08/2016",
    vowsDate: "29/07/2022",
    ordinationDate: "27/08/2024",
    phone: "0386968049",
    email: "louisphuoctam@gmail.com"
  },
  {
    id: 'nk4',
    name: "Phaolô Nguyễn Quang Thanh",
    role: "Thành viên",
    birthDate: "19/03/1972",
    novitiateDate: "01/09/1998",
    vowsDate: "23/08/2003",
    ordinationDate: "21/10/2005",
    phone: "0384339135",
    email: "thanhpaul@gmail.com"
  },
  {
    id: 'nk5',
    name: "Gioan.B Nguyễn Văn Thuận",
    role: "Thành viên",
    birthDate: "26/10/1989",
    novitiateDate: "09/08/2019",
    vowsDate: "20/06/2025",
    ordinationDate: "",
    phone: "0339119067",
    email: "thuan10qt@gmail.com"
  },
];

const NHA_BINH_CHANH_CONTACTS = [
  {
    id: 'bc1',
    name: "Phêrô Ngô Văn Thuyên",
    role: "Thành viên",
    birthDate: "09/10/1971",
    novitiateDate: "31/08/2004",
    vowsDate: "22/10/2009",
    ordinationDate: "21/09/2010",
    phone: "0344820556",
    email: "pierrethuyen@yahoo.com"
  },
  {
    id: 'bc2',
    name: "Giuse Phạm Đức Chỉnh",
    role: "Thành viên",
    birthDate: "08/09/1990",
    novitiateDate: "11/08/2017",
    vowsDate: "23/06/2023",
    ordinationDate: "27/08/2024",
    phone: "0937469983",
    email: "ducchinhk211990@gmail.com"
  },
  {
    id: 'bc3',
    name: "Martinô Nguyễn Kim Danh",
    role: "Thành viên",
    birthDate: "20/11/1988",
    novitiateDate: "12/08/2015",
    vowsDate: "20/07/2021",
    ordinationDate: "25/08/2022",
    phone: "0976261570",
    email: "nguyenkimdanh_2011@yahoo.com"
  },
  {
    id: 'bc4',
    name: "Antôn Nguyễn Văn Lộc",
    role: "Thành viên",
    birthDate: "22/11/1984",
    novitiateDate: "15/08/2014",
    vowsDate: "24/07/2020",
    ordinationDate: "08/04/2021",
    phone: "",
    email: "locquocte@gmail.com"
  },
  {
    id: 'bc5',
    name: "Phanxicô Xaviê Nguyễn Phước Sơn",
    role: "Thành viên",
    birthDate: "06/05/1973",
    novitiateDate: "14/08/2008",
    vowsDate: "03/05/2014",
    ordinationDate: "20/05/2019",
    phone: "0346622967",
    email: "fxphuocson@gmail.com"
  },
  {
    id: 'bc6',
    name: "Đaminh Vũ Ngọc Tích",
    role: "Thành viên",
    birthDate: "31/10/1960",
    novitiateDate: "01/10/1994",
    vowsDate: "15/08/1999",
    ordinationDate: "",
    phone: "0385306606",
    email: "ngoctichcm@gmail.com"
  },
  {
    id: 'bc7',
    name: "Phêrô Nguyễn Quang Tiến",
    role: "Thành viên",
    birthDate: "07/06/1972",
    novitiateDate: "01/10/1997",
    vowsDate: "31/08/2002",
    ordinationDate: "21/10/2005",
    phone: "0919150676",
    email: "pettiencm@yahoo.com"
  },
];

const NHA_NHA_TRANG_CONTACTS = [
  {
    id: 'ntr1',
    name: "Giuse Nguyễn Kim Long",
    role: "Thành viên",
    birthDate: "03/05/1972",
    novitiateDate: "01/10/1996",
    vowsDate: "25/08/2001",
    ordinationDate: "21/10/2005",
    phone: "0988331991",
    email: "joslongcm@gmail.com"
  },
  {
    id: 'ntr2',
    name: "Phêrô Trần Khắc Hoan",
    role: "Thành viên",
    birthDate: "29/06/1979",
    novitiateDate: "07/08/2020",
    vowsDate: "20/06/2025",
    ordinationDate: "",
    phone: "0356778599",
    email: "hoantrannl@gmail.com"
  },
  {
    id: 'ntr3',
    name: "Phêrô Trần Công Minh",
    role: "Thành viên",
    birthDate: "22/03/1974",
    novitiateDate: "01/09/1998",
    vowsDate: "23/08/2003",
    ordinationDate: "08/03/2006",
    phone: "0914289026",
    email: "pettrancongminhcm@gmail.com"
  }
];

const NHA_BUNG_KE_CONTACTS = [
  {
    id: 'bk1',
    name: "Giuse Đinh Quang Hùng Cường",
    role: "Thành viên",
    birthDate: "10/10/1977",
    novitiateDate: "25/08/2007",
    vowsDate: "31/01/2013",
    ordinationDate: "01/06/2013",
    phone: "0974129277",
    email: "dinhcuongvs@gmail.com"
  },
  {
    id: 'bk2',
    name: "Phêrô Cao Lương Bằng",
    role: "Thành viên",
    birthDate: "22/10/1977",
    novitiateDate: "15/08/2013",
    vowsDate: "26/07/2019",
    ordinationDate: "",
    phone: "0346471979",
    email: "cockientroi77@gmail.com"
  },
  {
    id: 'bk3',
    name: "Giuse Trần Đình Hảo",
    role: "Thành viên",
    birthDate: "13/09/1984",
    novitiateDate: "11/8/2018",
    vowsDate: "20/06/2024",
    ordinationDate: "20/08/2025",
    phone: "0919043486",
    email: "tranvanhao2010@gmail.com"
  },
  {
    id: 'bk4',
    name: "Đaminh Đỗ Thanh Huynh",
    role: "Thành viên",
    birthDate: "20/11/1967",
    novitiateDate: "01/10/1996",
    vowsDate: "25/08/2001",
    ordinationDate: "24/02/2005",
    phone: "0918194153",
    email: "thanhhuynhdo@yahoo.com.vn"
  },
];

const NHA_DAK_SONG_CONTACTS = [
  {
    id: 'ds1',
    name: "Antôn Padova Nguyễn Anh Tuấn",
    role: "Thành viên",
    birthDate: "02/03/1971",
    novitiateDate: "01/09/2000",
    vowsDate: "27/08/2005",
    ordinationDate: "23/08/2008",
    phone: "0936940497",
    email: "anthonytuancm@yahoo.com"
  },
  {
    id: 'ds2',
    name: "Giuse K’ Tim",
    role: "Thành viên",
    birthDate: "19/11/1990",
    novitiateDate: "09/08/2019",
    vowsDate: "20/06/2025",
    ordinationDate: "",
    phone: "0365010647",
    email: "justim90@gmail.com"
  },
  {
    id: 'ds3',
    name: "Phaolô Lê Văn Thông",
    role: "Thành viên",
    birthDate: "08/04/1988",
    novitiateDate: "11/8/2018",
    vowsDate: "20/06/2024",
    ordinationDate: "20/08/2025",
    phone: "0966003447",
    email: "paullethong@gmail.com"
  },
];

const NHA_XUAN_HOA_CONTACTS = [
  {
    id: 'xh1',
    name: "Giuse Nguyễn Xuân Tĩnh",
    role: "Thành viên",
    birthDate: "30/11/1954",
    novitiateDate: "27/09/1988",
    vowsDate: "26/09/1990",
    ordinationDate: "22/02/1997",
    phone: "0919262476",
    email: "josephtinhcm@gmail.com"
  },
  {
    id: 'xh2',
    name: "Phaolô Tống Phước Hảo",
    role: "Thành viên",
    birthDate: "01/02/1966",
    novitiateDate: "01/10/1995",
    vowsDate: "26/08/2000",
    ordinationDate: "08/03/2006",
    phone: "0986354180",
    email: "tongphuochaokt@gmail.com"
  },
  {
    id: 'xh4',
    name: "Giuse Maria Nguyễn Văn Toản",
    role: "Thành viên",
    birthDate: "22/08/1984",
    novitiateDate: "13/08/2016",
    vowsDate: "29/07/2022",
    ordinationDate: "10/08/2023",
    phone: "0978988742",
    email: "josnguyenvantoan@gmail.com"
  },
];

const NHA_KON_XOM_LUH_CONTACTS = [
  {
    id: 'kxl1',
    name: "Đaminh Saviô Phan Đại Phước",
    role: "Thành viên",
    birthDate: "21/03/1976",
    novitiateDate: "29/08/2005",
    vowsDate: "29/07/2011",
    ordinationDate: "24/11/2012",
    phone: "0934941976",
    email: "daiphuocphan@yahoo.com"
  },
  {
    id: 'kxl2',
    name: "Gioan Nguyễn Ngọc Đại",
    role: "Thành viên",
    birthDate: "01/01/1989",
    novitiateDate: "11/8/2018",
    vowsDate: "20/06/2024",
    ordinationDate: "20/08/2025",
    phone: "0974439602",
    email: "ngocdai989@gmail.com"
  },
  {
    id: 'kxl3',
    name: "Giuse Nguyễn Thiếu Kỳ",
    role: "Thành viên",
    birthDate: "09/02/1984",
    novitiateDate: "12/08/2015",
    vowsDate: "20/07/2021",
    ordinationDate: "25/08/2022",
    phone: "0908257782",
    email: "nguyenthieuky2000@yahoo.com"
  },
  {
    id: 'kxl4',
    name: "Gioan Baotixita Lê Đình Cơ",
    role: "Thành viên",
    birthDate: "20/12/1980",
    novitiateDate: "15/08/2011",
    vowsDate: "28/07/2017",
    ordinationDate: "05/06/2018",
    phone: "0966031037",
    email: "ledinhco1037@gmail.com"
  }
];

const NHA_TAN_LAP_CONTACTS = [
  {
    id: 'tl1',
    name: "Giuse Lưu Xuân Minh Trường",
    role: "Thành viên",
    birthDate: "18/08/1967",
    novitiateDate: "30/08/2003",
    vowsDate: "12/12/2008",
    ordinationDate: "22/06/2020",
    phone: "0985846860",
    email: "lxuantruong07@yahoo.com"
  },
  {
    id: 'tl2',
    name: "Anrê Lê Huy Cường",
    role: "Thành viên",
    birthDate: "26/01/1989",
    novitiateDate: "11/08/2017",
    vowsDate: "23/06/2023",
    ordinationDate: "27/08/2024",
    phone: "0394129271",
    email: "mr.lehuycuong@gmail.com"
  },
  {
    id: 'tl3',
    name: "Giuse Đặng Xuân Chiến",
    role: "Thành viên",
    birthDate: "15/11/1984",
    novitiateDate: "12/08/2015",
    vowsDate: "20/07/2021",
    ordinationDate: "25/08/2022",
    phone: "0911909623",
    email: "dangxuanchienpc@gmail.com"
  },
  {
    id: 'tl4',
    name: "Gioan Baotixita Hoàng Kim Tiến",
    role: "Thành viên",
    birthDate: "17/07/1972",
    novitiateDate: "01/09/1998",
    vowsDate: "23/08/2003",
    ordinationDate: "21/10/2005",
    phone: "0982830389",
    email: "kimtiencm@gmail.com"
  },
  {
    id: 'tl5',
    name: "Giuse Nguyễn Ngọc Vũ",
    role: "Thành viên",
    birthDate: "10/06/1989",
    novitiateDate: "11/8/2018",
    vowsDate: "20/06/2024",
    ordinationDate: "20/08/2025",
    phone: "0915025610",
    email: "josvunguyen1006@gmail.com"
  }
];

const NHA_MANG_DEN_CONTACTS = [
  {
    id: 'md1',
    name: "Gioan Nguyễn Đức Hòa",
    role: "Thành viên",
    birthDate: "15/03/1965",
    novitiateDate: "01/10/1994",
    vowsDate: "15/08/1999",
    ordinationDate: "08/03/2006",
    phone: "0973816894",
    email: "gaduchoa65@gmail.com"
  },
  {
    id: 'md2',
    name: "Giuse Nguyễn Đức Duy",
    role: "Thành viên",
    birthDate: "26/03/1990",
    novitiateDate: "11/08/2017",
    vowsDate: "20/06/2024",
    ordinationDate: "20/08/2025",
    phone: "0838861708",
    email: "duynho353@gmail.com"
  },
  {
    id: 'md3',
    name: "Phêrô Nguyễn Quốc Dương",
    role: "Thành viên",
    birthDate: "04/08/1983",
    novitiateDate: "15/08/2013",
    vowsDate: "26/07/2019",
    ordinationDate: "22/06/2020",
    phone: "0397146667",
    email: "quocduongcm70@gmail.com"
  },
  {
    id: 'md4',
    name: "Giuse Nguyễn Đức Ngọc",
    role: "Thành viên",
    birthDate: "04/11/1953",
    novitiateDate: "26/09/1990",
    vowsDate: "30/10/1993",
    ordinationDate: "12/03/1998",
    phone: "0915359816",
    email: "vinhsonkadon@yahoo.com"
  },
  {
    id: 'md5',
    name: "Giuse Nguyễn Hồng Tâm",
    role: "Thành viên",
    birthDate: "04/04/1983",
    novitiateDate: "11/08/2017",
    vowsDate: "23/06/2023",
    ordinationDate: "27/08/2024",
    phone: "0858888810",
    email: "josnguyencm@gmail.com"
  },
  {
    id: 'md6',
    name: "Giuse Lại Ngọc Tuấn",
    role: "Thành viên",
    birthDate: "04/04/1973",
    novitiateDate: "01/09/1998",
    vowsDate: "23/08/2003",
    ordinationDate: "11/11/2006",
    phone: "0915753612",
    email: "ngoctuanvs@gmail.com"
  }
];

const NHA_LANG_NAM_CONTACTS = [
  {
    id: 'ln1',
    name: "Giuse Phạm Duy Lân",
    role: "Thành viên",
    birthDate: "16/04/1973",
    novitiateDate: "01/10/1996",
    vowsDate: "25/08/2002",
    ordinationDate: "13/06/2005",
    phone: "0983539035",
    email: "josmarialancm@gmail.com"
  },
  {
    id: 'ln2',
    name: "Phaolô Trần Văn Lành",
    role: "Thành viên",
    birthDate: "14/03/1978",
    novitiateDate: "14/08/2008",
    vowsDate: "03/05/2014",
    ordinationDate: "03/12/2014",
    phone: "0981310577",
    email: "lanhtrancm@gmail.com"
  },
  {
    id: 'ln3',
    name: "Phêrô Dương Thái Long",
    role: "Thành viên",
    birthDate: "29/04/1978",
    novitiateDate: "15/08/2011",
    vowsDate: "28/07/2017",
    ordinationDate: "05/06/2018",
    phone: "0347872889",
    email: "thailong08@yahoo.com"
  },
  {
    id: 'ln4',
    name: "Phêrô Nguyễn Văn Chỉnh",
    role: "Thành viên",
    birthDate: "01/09/1983",
    novitiateDate: "15/08/2013",
    vowsDate: "26/07/2019",
    ordinationDate: "22/06/2020",
    phone: "0367633289",
    email: "petechinhnguyen@yahoo.com"
  },
  {
    id: 'ln5',
    name: "Phaolô Nguyễn Đình Tứ",
    role: "Thành viên",
    birthDate: "12/02/1985",
    novitiateDate: "11/08/2018",
    vowsDate: "20/06/2024",
    ordinationDate: "20/08/2025",
    phone: "0972621607",
    email: "paulnguyendinhtu@gmail.com"
  }
];

const CONG_DOAN_KHANH_SON_CONTACTS = [
  {
    id: 'ks1',
    name: "Gioan Baotixita Đào Huy Hoàng",
    role: "Thành viên",
    birthDate: "05/03/1972",
    novitiateDate: "29/08/2005",
    vowsDate: "29/07/2011",
    ordinationDate: "24/11/2012",
    phone: "0917401079",
    email: "dhhoangcm@gmail.com"
  },
  {
    id: 'ks2',
    name: "Phanxicô Xaviê Nguyễn Đức Thuận",
    role: "Thành viên",
    birthDate: "07/05/1988",
    novitiateDate: "13/08/2016",
    vowsDate: "29/07/2022",
    ordinationDate: "10/08/2023",
    phone: "0784122949",
    email: "phancis@gmail.com"
  },
  {
    id: 'ks3',
    name: "Antôn Nguyễn Thanh Tường",
    role: "Thành viên",
    birthDate: "27/01/1979",
    novitiateDate: "28/08/2006",
    vowsDate: "29/07/2011",
    ordinationDate: "24/11/2012",
    phone: "0912684380",
    email: "nguyenthanhtuongcm@gmail.com"
  }
];

const CONG_DOAN_CAN_THO_CONTACTS = [
  {
    id: 'ct1',
    name: "Giuse Nguyễn Phát Thành",
    role: "Thành viên",
    birthDate: "01/11/1977",
    novitiateDate: "14/08/2008",
    vowsDate: "03/05/2014",
    ordinationDate: "03/12/2014",
    phone: "0365665957",
    email: "nguyenphatthanh@yahoo.com.vn"
  },
  {
    id: 'ct2',
    name: "Giuse Nguyễn Quốc Đạt",
    role: "Thành viên",
    birthDate: "08/05/1972",
    novitiateDate: "01/10/1996",
    vowsDate: "25/08/2001",
    ordinationDate: "21/10/2005",
    phone: "0972994914",
    email: "dnjophdat@gmail.com"
  },
  {
    id: 'ct3',
    name: "Laurensô Trần Nam Sách",
    role: "Thành viên",
    birthDate: "15/08/1975",
    novitiateDate: "31/08/2004",
    vowsDate: "22/10/2009",
    ordinationDate: "18/10/2011",
    phone: "0932149129",
    email: "laurensosach@gmail.com"
  }
];

const CONG_DOAN_HUONG_PHUONG_CONTACTS = [
  {
    id: 'hp1',
    name: "Phêrô Nguyễn Hữu Sáng",
    role: "Thành viên",
    birthDate: "28/10/1970",
    novitiateDate: "31/08/2004",
    vowsDate: "22/10/2009",
    ordinationDate: "18/10/2011",
    phone: "0916848644",
    email: "nguyenhuusangcm@gmail.com"
  },
  {
    id: 'hp2',
    name: "Phêrô Trương Văn Ân",
    role: "Thành viên",
    birthDate: "18/09/1988",
    novitiateDate: "11/08/2018",
    vowsDate: "20/06/2024",
    ordinationDate: "20/08/2025",
    phone: "0906097114",
    email: "antruong988@gmail.com"
  },
  {
    id: 'hp3',
    name: "Gioan Baotixita Nguyễn Quyết Chiến",
    role: "Thành viên",
    birthDate: "19/05/1975",
    novitiateDate: "01/09/1998",
    vowsDate: "23/08/2003",
    ordinationDate: "21/10/2005",
    phone: "0973722257",
    email: "gbchien@gmail.com"
  },
  {
    id: 'hp4',
    name: "Phêrô Phạm Du",
    role: "Thành viên",
    birthDate: "25/12/1989",
    novitiateDate: "11/08/2018",
    vowsDate: "20/06/2024",
    ordinationDate: "20/08/2025",
    phone: "0352718812",
    email: "petphamdu@gmail.com"
  },
  {
    id: 'hp5',
    name: "Giuse Phạm Thế Hoàn",
    role: "Thành viên",
    birthDate: "29/03/1987",
    novitiateDate: "15/08/2014",
    vowsDate: "24/07/2020",
    ordinationDate: "08/04/2021",
    phone: "0378754187",
    email: "josthehoan@gmail.com"
  },
  {
    id: 'hp6',
    name: "Martinô Ya Nghiệp",
    role: "Thành viên",
    birthDate: "06/11/1981",
    novitiateDate: "13/08/2016",
    vowsDate: "29/07/2022",
    ordinationDate: "10/08/2023",
    phone: "0915707975",
    email: "yanghiepmartin@gmail.com"
  },
  {
    id: 'hp7',
    name: "Vinh Sơn F. Trần Phú Quốc",
    role: "Thành viên",
    birthDate: "01/05/1990",
    novitiateDate: "11/08/2017",
    vowsDate: "23/06/2023",
    ordinationDate: "27/08/2024",
    phone: "0933008920",
    email: "vinhsonphuquoc@gmail.com"
  },
  {
    id: 'hp8',
    name: "Giuse Hoàng Văn Trí",
    role: "Thành viên",
    birthDate: "27/08/1982",
    novitiateDate: "15/08/2013",
    vowsDate: "26/07/2019",
    ordinationDate: "22/06/2020",
    phone: "0987179166",
    email: "hoangvantri1983@gmail.com"
  },
  {
    id: 'hp9',
    name: "Giuse Đinh Văn Vinh",
    role: "Thành viên",
    birthDate: "13/10/1982",
    novitiateDate: "15/08/2009",
    vowsDate: "17/07/2015",
    ordinationDate: "11/09/2015",
    phone: "0345906679",
    email: "joseph_vinhcm@yahoo.com"
  },
  {
    id: 'hp10',
    name: "Gioan Nguyễn Văn Quyết",
    role: "Thành viên",
    birthDate: "20/03/1989",
    novitiateDate: "11/8/2018",
    vowsDate: "20/06/2024",
    ordinationDate: "20/08/2025",
    phone: "0989457097",
    email: "gavanquyet@gmail.com"
  }
];

const CONG_DOAN_BAC_TAN_UYEN_CONTACTS = [
  {
    id: 'btu1',
    name: "Gioan Phạm Hữu Linh",
    role: "Thành viên",
    birthDate: "16/04/1978",
    novitiateDate: "25/08/2007",
    vowsDate: "17/07/2015",
    ordinationDate: "11/09/2015",
    phone: "0966450355",
    email: "phamhuulinhcm@gmail.com"
  },
  {
    id: 'btu2',
    name: "Gioan Baotixita Nguyễn Duy Hành",
    role: "Thành viên",
    birthDate: "21/12/1977",
    novitiateDate: "15/08/2011",
    vowsDate: "28/07/2017",
    ordinationDate: "05/06/2018",
    phone: "0978286027",
    email: "jbduyhanhcm@gmail.com"
  },
  {
    id: 'btu3',
    name: "Gioan Phạm Anh Huynh",
    role: "Thành viên",
    birthDate: "01/01/1990",
    novitiateDate: "11/08/2018",
    vowsDate: "20/06/2024",
    ordinationDate: "20/08/2025",
    phone: "0984181676",
    email: "gioanphamhuynh@gmail.com"
  },
  {
    id: 'btu4',
    name: "Vinh Sơn Ferrier Mai Hoài Thương",
    role: "Thành viên",
    birthDate: "25/09/1974",
    novitiateDate: "01/09/2000",
    vowsDate: "27/08/2005",
    ordinationDate: "23/08/2008",
    phone: "0907844440",
    email: "maihoaithuongcm@yahoo.com.vn"
  },
  {
    id: 'btu5',
    name: "Giuse Trần Văn Trung",
    role: "Thành viên",
    birthDate: "22/01/1970",
    novitiateDate: "01/10/1994",
    vowsDate: "15/08/1999",
    ordinationDate: "16/02/2004",
    phone: "0902517321",
    email: "jmtrungcm@yahoo.fr"
  },
  {
    id: 'btu6',
    name: "Gioan Maria Đỗ Vũ Đức Minh",
    role: "Thành viên",
    birthDate: "11/01/1992",
    novitiateDate: "09/08/2019",
    vowsDate: "20/08/2025",
    ordinationDate: "",
    phone: "0868033767",
    email: "dominh1101@gmail.com"
  }
];

const CONG_DOAN_CHI_LANG_CONTACTS = [
  {
    id: 'cl1',
    name: "Phêrô Đinh Quốc Dũng",
    role: "Thành viên",
    birthDate: "22/12/1973",
    novitiateDate: "01/09/1999",
    vowsDate: "28/08/2004",
    ordinationDate: "27/09/2007",
    phone: "0907399860",
    email: "pherodung2015@gmail.com"
  },
  {
    id: 'cl2',
    name: "Giuse Phan Thanh Bình",
    role: "Thành viên",
    birthDate: "16/06/1977",
    novitiateDate: "15/08/2011",
    vowsDate: "28/07/2017",
    ordinationDate: "05/06/2018",
    phone: "0915759661",
    email: "josbinhvs@gmail.com"
  },
  {
    id: 'cl3',
    name: "Giuse Maria Hoàng Trọng Hoan",
    role: "Thành viên",
    birthDate: "09/10/1984",
    novitiateDate: "15/08/2013",
    vowsDate: "24/07/2020",
    ordinationDate: "08/04/2021",
    phone: "0931238795",
    email: "hoanghoan2004@yahoo"
  },
  {
    id: 'cl4',
    name: "Luca Phạm Thanh Phong",
    role: "Thành viên",
    birthDate: "19/10/1970",
    novitiateDate: "01/10/1995",
    vowsDate: "26/09/2000",
    ordinationDate: "16/02/2004",
    phone: "0988920262",
    email: "lucaphongvn@yahoo.com"
  },
  {
    id: 'cl5',
    name: "Phêrô Nguyễn Duy Anh",
    role: "Thành viên",
    birthDate: "22/06/1988",
    novitiateDate: "11/08/2018",
    vowsDate: "20/06/2024",
    ordinationDate: "20/08/2025",
    phone: "0394655797",
    email: "peterduyanh22688@gmail.com"
  }
];

const CONG_DOAN_HOI_YEN_CONTACTS = [
  {
    id: 'hy1',
    name: "Gioan Baotixita Phạm Quốc Tuấn (Bình)",
    role: "Thành viên",
    birthDate: "01/07/1969",
    novitiateDate: "01/10/1994",
    vowsDate: "15/08/1999",
    ordinationDate: "24/02/2005",
    phone: "0986388250",
    email: "jbtuancm@yahoo.com.vn"
  },
  {
    id: 'hy2',
    name: "Gioan Dương Văn Phong",
    role: "Thành viên",
    birthDate: "10/07/1990",
    novitiateDate: "11/08/2018",
    vowsDate: "20/06/2024",
    ordinationDate: "",
    phone: "0969069181",
    email: "gioanduongphong90@gmail.com"
  },
  {
    id: 'hy3',
    name: "Vinh Sơn Nguyễn Văn Thống",
    role: "Thành viên",
    birthDate: "26/05/1984",
    novitiateDate: "13/08/2016",
    vowsDate: "29/07/2022",
    ordinationDate: "10/08/2023",
    phone: "0937376009",
    email: "nguyenvanthong26584@gmail.com"
  }
];

const CONG_DOAN_PHONG_LOI_CONTACTS = [
  {
    id: 'pl1',
    name: "Gioa Kim Lê Văn Chiến",
    role: "Thành viên",
    birthDate: "02/02/1976",
    novitiateDate: "01/09/2000",
    vowsDate: "27/08/2005",
    ordinationDate: "23/08/2008",
    phone: "0386127789",
    email: "levanchien3@gmail.com"
  },
  {
    id: 'pl2',
    name: "Gioan Baotixita Nguyễn Văn Ái",
    role: "Thành viên",
    birthDate: "05/08/1988",
    novitiateDate: "11/08/2018",
    vowsDate: "20/06/2024",
    ordinationDate: "20/08/2025",
    phone: "0386505597",
    email: "jbainguyenvan@gmail.com"
  },
  {
    id: 'pl3',
    name: "Louis Nguyễn Ngọc Luận",
    role: "Thành viên",
    birthDate: "25/01/1983",
    novitiateDate: "15/08/2013",
    vowsDate: "26/07/2019",
    ordinationDate: "08/04/2021",
    phone: "0987210910",
    email: "luy4lth@yahoo.com"
  }
];

const CONG_DOAN_PHINH_HO_CONTACTS = [
  {
    id: 'ph1',
    name: "Phaolô Phan Tiến Dũng",
    role: "Thành viên",
    birthDate: "20/10/1978",
    novitiateDate: "25/08/2007",
    vowsDate: "31/01/2013",
    ordinationDate: "01/06/2013",
    phone: "0906544030",
    email: "pauldung050@yahoo.com"
  },
  {
    id: 'ph2',
    name: "Antôn Nguyễn Văn Chung",
    role: "Thành viên",
    birthDate: "19/05/1983",
    novitiateDate: "11/08/2017",
    vowsDate: "23/06/2023",
    ordinationDate: "27/08/2024",
    phone: "0917708943",
    email: "antonchungvs@gmail.com"
  },
  {
    id: 'ph3',
    name: "Giuse Vũ Quốc Hội",
    role: "Thành viên",
    birthDate: "07/08/1956",
    novitiateDate: "27/09/1990",
    vowsDate: "27/09/1994",
    ordinationDate: "04/12/2002",
    phone: "0337277543",
    email: "chagiusecm@gmail.com"
  },
  {
    id: 'ph4',
    name: "Giuse Sang Đăm Khang",
    role: "Thành viên",
    birthDate: "08/05/1980",
    novitiateDate: "13/08/2016",
    vowsDate: "29/07/2022",
    ordinationDate: "10/08/2023",
    phone: "0986359914",
    email: "joskhang0805@gmail.com"
  },
  {
    id: 'ph5',
    name: "Giuse Nguyễn Thanh Minh",
    role: "Thành viên",
    birthDate: "30/09/1988",
    novitiateDate: "15/08/2014",
    vowsDate: "24/07/2020",
    ordinationDate: "08/04/2021",
    phone: "0979334725",
    email: "josminhcm@gmail.com"
  },
  {
    id: 'ph6',
    name: "Phêrô Nguyễn Thanh Phương",
    role: "Thành viên",
    birthDate: "07/03/1982",
    novitiateDate: "15/08/2013",
    vowsDate: "26/07/2019",
    ordinationDate: "22/06/2020",
    phone: "0358687863",
    email: "thanhphuongbennuoc@gmail.com"
  },
  {
    id: 'ph7',
    name: "Giuse Ngô Đức Thành",
    role: "Thành viên",
    birthDate: "15/07/1986",
    novitiateDate: "12/08/2015",
    vowsDate: "20/07/2021",
    ordinationDate: "25/08/2022",
    phone: "0396389060",
    email: "ngoducthanhd3t@gmail.com"
  },
  {
    id: 'ph8',
    name: "Micae Trần Thảo",
    role: "Thành viên",
    birthDate: "23/09/1989",
    novitiateDate: "11/08/2018",
    vowsDate: "20/06/2024",
    ordinationDate: "20/08/2025",
    phone: "0973829683",
    email: "micaequocthao@gmail.com"
  },
  {
    id: 'ph9',
    name: "Antôn Lê Minh Thuật",
    role: "Thành viên",
    birthDate: "20/11/1983",
    novitiateDate: "15/08/2014",
    vowsDate: "24/07/2020",
    ordinationDate: "08/04/2021",
    phone: "0389050845",
    email: "antonleminhthuat@gmail.com"
  },
  {
    id: 'ph10',
    name: "Giuse Đinh Quang Tiên",
    role: "Thành viên",
    birthDate: "28/04/1989",
    novitiateDate: "12/08/2015",
    vowsDate: "20/07/2021",
    ordinationDate: "10/08/2023",
    phone: "0981604642",
    email: "quangtien9977@gmail.com"
  },
  {
    id: 'ph11',
    name: "Phêrô Nguyễn Văn Hiến",
    role: "Thành viên",
    birthDate: "15/06/1987",
    novitiateDate: "11/8/2018",
    vowsDate: "20/06/2024",
    ordinationDate: "20/08/2025",
    phone: "0344367513",
    email: "hiennguyenms567@gmail.com"
  }
];

const CONG_DOAN_HOA_KY_CONTACTS = [
  {
    id: 'hk1',
    name: "Giuse Nguyễn Anh Linh",
    role: "Thành viên",
    birthDate: "20/05/1979",
    novitiateDate: "28/08/2006",
    vowsDate: "15/08/2012",
    ordinationDate: "01/06/2013",
    email: "josnaldalat@gmail.com",
    phone: "0768160238"
  },
  {
    id: 'us_dh1',
    name: "Giuse Nguyễn Hữu Hiến Minh",
    role: "Thành viên",
    birthDate: "19/09/1984",
    novitiateDate: "15/08/2013",
    vowsDate: "26/07/2019",
    ordinationDate: "22/06/2020",
    email: "minhmap037@gmail.com",
    phone: "0354514833"
  }
];

const CONG_DOAN_PHAP_CONTACTS = [
  {
    id: 'fr1',
    name: "Phêrô Trần Công Thạnh",
    role: "Thành viên",
    birthDate: "01/06/1972",
    novitiateDate: "01/10/1995",
    vowsDate: "26/09/2000",
    ordinationDate: "21/09/2005",
    email: "thanhcong023@gmail.com",
    phone: "0909549023"
  },
  {
    id: 'fr_dh2',
    name: "Phêrô Nguyễn Văn Hưng",
    role: "Thành viên",
    birthDate: "20/07/1982",
    novitiateDate: "15/08/2009",
    vowsDate: "17/07/2015",
    ordinationDate: "11/09/2015",
    email: "peterhungcm@gmail.com",
    phone: "033751061414"
  }
];

const CONG_DOAN_TAY_BAN_NHA_CONTACTS = [
  {
    id: 'es1',
    name: "Gioan Baotixita Vũ Văn Tuấn",
    role: "Thành viên",
    birthDate: "22/01/1989",
    novitiateDate: "12/08/2015",
    vowsDate: "20/07/2021",
    ordinationDate: "25/08/2022",
    email: "jbvuvantuan@gmail.com",
    phone: "0977911018"
  }
];

const CONG_DOAN_HA_LAN_CONTACTS = [
  {
    id: 'nl1',
    name: "Đaminh Saviô Nguyễn Hoàng Vân Phong",
    role: "Thành viên",
    birthDate: "04/01/1984",
    novitiateDate: "15/08/2012",
    vowsDate: "21/07/2018",
    ordinationDate: "20/05/2019",
    email: "saviophongcm@gmail.com",
    phone: "0329487826"
  }
];

const CONG_DOAN_PAKISTAN_CONTACTS = [
  {
    id: 'pk1',
    name: "Phêrô Trần Đình Dương",
    role: "Thành viên",
    birthDate: "12/02/1974",
    novitiateDate: "15/08/2014",
    vowsDate: "29/01/2021",
    ordinationDate: "08/04/2021",
    email: "pherodinhduong@gmail.com",
    phone: "0902021272"
  },
  {
    id: 'pk2',
    name: "Vinh Sơn Nguyễn Văn Đoán",
    role: "Thành viên",
    birthDate: "23/09/1986",
    novitiateDate: "15/08/2014",
    vowsDate: "29/01/2021",
    ordinationDate: "08/04/2021",
    email: "vincentpaulvandoanxh@gmail.com",
    phone: "0348306046"
  }
];

const CONG_DOAN_DAI_LOAN_CONTACTS = [
  {
    id: 'tw1',
    name: "Phêrô Nguyễn Đức Trung",
    role: "Thành viên",
    birthDate: "05/06/1979",
    novitiateDate: "25/08/2007",
    vowsDate: "31/01/2013",
    ordinationDate: "01/06/2013",
    email: "prductrungnguyen@yahoo.com",
    phone: "00886965129132"
  },
  {
    id: 'tw2',
    name: "Martin Cao Văn Luận",
    role: "Thành viên",
    birthDate: "18/10/1982",
    novitiateDate: "15/08/2013",
    vowsDate: "26/07/2019",
    ordinationDate: "08/04/2021",
    email: "martincaovanluan@gmail.com",
    phone: "0349419082"
  }
];

const CONG_DOAN_PNG_CONTACTS = [
  {
    id: 'png1',
    name: "Phaolô Nguyễn Văn Bình",
    role: "Thành viên",
    birthDate: "20/03/1990",
    novitiateDate: "11/08/2018",
    vowsDate: "20/06/2024",
    ordinationDate: "20/08/2025",
    email: "paulbinh203@gmail.com",
    phone: "0988832171"
  },
  {
    id: 'png2',
    name: "Giuse Cao Viết Tuấn",
    role: "Thành viên",
    birthDate: "06/06/1984",
    novitiateDate: "15/08/2012",
    vowsDate: "30/10/2018",
    ordinationDate: "20/05/2019",
    email: "josephcaoviettuan@gmail.com",
    phone: "+67579203385"
  },
  {
    id: 'png3',
    name: "Augustinô Hà Vũ",
    role: "Thành viên",
    birthDate: "09/04/1984",
    novitiateDate: "15/08/2011",
    vowsDate: "28/07/2017",
    ordinationDate: "05/06/2018",
    email: "augustinhavu@yahoo.com",
    phone: "0972446405"
  }
];

const CONG_DOAN_NHAT_CONTACTS = [
  {
    id: 'jp1',
    name: "Phêrô Phạm Hồng Phương",
    role: "Thành viên",
    birthDate: "18/07/1992",
    novitiateDate: "11/08/2018",
    vowsDate: "20/06/2024",
    ordinationDate: "20/08/2025",
    email: "pherophuong18@gmail.com",
    phone: "0384 634 514"
  },
  {
    id: 'jp2',
    name: "Gioan Baotixita Phạm Văn Thuyên",
    role: "Thành viên",
    birthDate: "25/04/1985",
    novitiateDate: "15/08/2013",
    vowsDate: "26/07/2019",
    ordinationDate: "22/06/2020",
    email: "vanthuyenkontum@gmail.com",
    phone: "07085809087"
  },
  {
    id: 'jp3',
    name: "Augustino Phạm Nguyên Hoàng Tú",
    role: "Thành viên",
    birthDate: "10/10/1982",
    novitiateDate: "15/08/2014",
    vowsDate: "24/07/2020",
    ordinationDate: "08/04/2021",
    email: "phamnguyenhoangtu@gmail.com",
    phone: "+817041050925"
  }
];

const CONG_DOAN_LAO_CONTACTS = [
  {
    id: 'lao1',
    name: "Vinh Sơn Ferrier Phạm Thái Bình",
    role: "Thành viên",
    birthDate: "06/11/1984",
    novitiateDate: "11/08/2018",
    vowsDate: "20/06/2024",
    ordinationDate: "20/08/2025",
    email: "vincentferriebinhpham@gmail.com",
    phone: "0932017695"
  },
  {
    id: 'lao2',
    name: "Giuse Chu Minh Hoàng",
    role: "Thành viên",
    birthDate: "02/09/1988",
    novitiateDate: "11/08/2018",
    vowsDate: "20/06/2024",
    ordinationDate: "20/08/2025",
    email: "josminhhoangCm@gmail.com",
    phone: "0986560340"
  },
  {
    id: 'lao3',
    name: "Giuse Nguyễn Văn Hùng",
    role: "Thành viên",
    birthDate: "20/10/1986",
    novitiateDate: "12/08/2015",
    vowsDate: "20/07/2021",
    ordinationDate: "25/08/2022",
    email: "caonguyen20486@gmail.com",
    phone: "0973112221"
  },
  {
    id: 'lao4',
    name: "Phêrô Nguyễn Văn Vinh",
    role: "Thành viên",
    birthDate: "04/10/1987",
    novitiateDate: "09/08/2019",
    vowsDate: "20/06/2025",
    ordinationDate: "",
    email: "toinhan.trove@gmail.com",
    phone: "0348457424"
  }
];

const CONG_DOAN_COSTA_RICA_CONTACTS = [
  {
    id: 'cr1',
    name: "Giuse Nguyễn Đăng Châu",
    role: "Thành viên",
    birthDate: "10/12/1988",
    novitiateDate: "12/08/2015",
    vowsDate: "20/07/2021",
    ordinationDate: "25/08/2022",
    email: "svtvchau@gmail.com",
    phone: "0909017364"
  }
];

const CONG_DOAN_HAN_QUOC_CONTACTS = [
  {
    id: 'kr1',
    name: "Antôn Nguyễn Văn Bính",
    role: "Thành viên",
    birthDate: "04/10/1988",
    novitiateDate: "13/08/2016",
    vowsDate: "29/07/2022",
    ordinationDate: "10/08/2023",
    email: "kienvangqt3@gmail.com",
    phone: "0386011038"
  },
  {
    id: 'kr2',
    name: "Giuse Nguyễn Quốc Dũng",
    role: "Thành viên",
    birthDate: "14/11/1985",
    novitiateDate: "13/08/2016",
    vowsDate: "29/07/2022",
    ordinationDate: "10/08/2023",
    email: "giusedungcm@gmail.com",
    phone: "0353257371"
  }
];

const DU_HOC_PHAP_CONTACTS = [
  {
    id: 'fr_dh1',
    name: "Gioan Baotixita Vũ Tiến Đức",
    role: "Thành viên",
    birthDate: "19/08/1984",
    novitiateDate: "15/08/2014",
    vowsDate: "24/07/2020",
    ordinationDate: "08/04/2021",
    email: "vutienduccm@gmail.com",
    phone: "0758301486"
  }
];

const DU_HOC_HOA_KY_CONTACTS = [
  {
    id: 'us_dh2',
    name: "Phêrô Ngô Văn Ngọc",
    role: "Thành viên",
    birthDate: "16/07/1987",
    novitiateDate: "12/08/2015",
    vowsDate: "20/07/2021",
    ordinationDate: "25/08/2022",
    email: "ngocassy@gmail.com",
    phone: "0962028197"
  },
  {
    id: 'us_dh3',
    name: "Giuse Cù Hồng Phúc",
    role: "Thành viên",
    birthDate: "01/04/1980",
    novitiateDate: "15/08/2011",
    vowsDate: "28/07/2017",
    ordinationDate: "05/06/2018",
    email: "hongphuccm1480@gmail.com",
    phone: "786 475 459"
  },
  {
    id: 'us_dh4',
    name: "Phaolô Phạm Văn Kim Phượng",
    role: "Thành viên",
    birthDate: "03/12/1987",
    novitiateDate: "11/08/2018",
    vowsDate: "27/04/2024",
    ordinationDate: "20/08/2025",
    email: "paulphuongp@gmail.com",
    phone: ""
  }
];

const DU_HOC_AUSTRALIA_CONTACTS = [
  {
    id: 'au_dh1',
    name: "Antôn Nguyễn Ngọc Thuận",
    role: "Thành viên",
    birthDate: "26/06/1990",
    novitiateDate: "13/08/2016",
    vowsDate: "29/07/2022",
    ordinationDate: "10/08/2023",
    email: "thuananton@gmail.com",
    phone: "0979420295"
  }
];

const DU_HOC_Y_CONTACTS = [
  {
    id: 'it_dh1',
    name: "Giuse Vũ Tiến Đạt",
    role: "Thành viên",
    birthDate: "25/04/1987",
    novitiateDate: "11/08/2017",
    vowsDate: "23/06/2023",
    ordinationDate: "27/08/2024",
    email: "josvutiendat@gmail.com",
    phone: "0989367476"
  }
];

const DU_HOC_PHILIPPINES_CONTACTS = [
  {
    id: 'ph_dh1',
    name: "Phêrô Nguyễn Anh Dũng",
    role: "Thành viên",
    birthDate: "16/06/1980",
    novitiateDate: "15/08/2012",
    vowsDate: "26/07/2019",
    ordinationDate: "22/06/2020",
    email: "dung166cm@gmail.com",
    phone: "0913100607"
  },
  {
    id: 'ph_dh2',
    name: "Phêrô Phạm Minh Triều",
    role: "Thành viên",
    birthDate: "21/06/1984",
    novitiateDate: "15/08/2013",
    vowsDate: "26/07/2019",
    ordinationDate: "08/04/2021",
    email: "mtrieukb@gmail.com",
    phone: "0328468096"
  }
];


export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => localStorage.getItem('vinhson_auth') === 'true');
  const [idInput, setIdInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (idInput === 'ThanhVinhSon' && passwordInput === 'lazarist1581') {
      localStorage.setItem('vinhson_auth', 'true');
      setIsAuthenticated(true);
      setCurrentPage(1);
      setLoginError('');
    } else {
      setLoginError('Tài khoản hoặc mật khẩu không chính xác. Vui lòng kiểm tra lại!');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('vinhson_auth');
    setIsAuthenticated(false);
    setIdInput('');
    setPasswordInput('');
  };

  const visiblePages = useMemo(() => {
    const totalPages = 41;
    const pages: (number | string)[] = [];
    
    // Always show page 1
    pages.push(1);
    
    let start = Math.max(2, currentPage - 1);
    let end = Math.min(totalPages - 1, currentPage + 1);
    
    if (currentPage <= 3) {
      end = Math.min(totalPages - 1, 4);
    } else if (currentPage >= totalPages - 2) {
      start = Math.max(2, totalPages - 3);
    }
    
    if (start > 2) {
      pages.push('...');
    }
    
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    
    if (end < totalPages - 1) {
      pages.push('...');
    }
    
    pages.push(totalPages);
    return pages;
  }, [currentPage]);

  const ALL_MEMBERS = useMemo(() => [
    ...COUNCIL_MEMBERS.map(m => ({ ...m, type: 'council', phone: 'Chưa cập nhật', email: 'Chưa cập nhật' })),
    ...FINANCE_COMMISSION_MEMBERS.map(m => ({ ...m, type: 'finance', phone: 'Chưa cập nhật', email: 'Chưa cập nhật' })),
    ...SPECIAL_APPOINTMENTS.map(m => ({ ...m, type: 'special', phone: 'Chưa cập nhật', email: 'Chưa cập nhật' })),
    ...DIRECTOR_APPOINTMENTS.map(m => ({ ...m, type: 'director', phone: 'Chưa cập nhật', email: 'Chưa cập nhật' })),
    ...MEDIA_COMMISSION_MEMBERS.map(m => ({ ...m, type: 'media', phone: 'Chưa cập nhật', email: 'Chưa cập nhật' })),
    ...INVESTIGATION_BOARD_MEMBERS.map(m => ({ ...m, type: 'investigation', phone: 'Chưa cập nhật', email: 'Chưa cập nhật' })),
    ...LITURGY_BOARD_MEMBERS.map(m => ({ ...m, type: 'liturgy', phone: 'Chưa cập nhật', email: 'Chưa cập nhật' })),
    ...EVANGELIZATION_BOARD_MEMBERS.map(m => ({ ...m, type: 'evangelization', phone: 'Chưa cập nhật', email: 'Chưa cập nhật' })),
    ...NHA_TINH_CONTACTS.map(m => ({ ...m, type: 'nha_tinh' })),
    ...NHA_DA_LAT_CONTACTS.map(m => ({ ...m, type: 'nha_da_lat' })),
    ...NHA_KA_DON_PROH_CONTACTS.map(m => ({ ...m, type: 'nha_ka_don_proh' })),
    ...NHA_PHUONG_LAM_CONTACTS.map(m => ({ ...m, type: 'nha_phuong_lam' })),
    ...NHA_TUC_TRUNG_CONTACTS.map(m => ({ ...m, type: 'nha_tuc_trung' })),
    ...NHA_NGUYEN_KIEM_CONTACTS.map(m => ({ ...m, type: 'nha_nguyen_kiem' })),
    ...NHA_BINH_CHANH_CONTACTS.map(m => ({ ...m, type: 'nha_binh_chanh' })),
    ...NHA_NHA_TRANG_CONTACTS.map(m => ({ ...m, type: 'nha_nha_trang' })),
    ...NHA_BUNG_KE_CONTACTS.map(m => ({ ...m, type: 'nha_bung_ke' })),
    ...NHA_DAK_SONG_CONTACTS.map(m => ({ ...m, type: 'nha_dak_song' })),
    ...NHA_XUAN_HOA_CONTACTS.map(m => ({ ...m, type: 'nha_xuan_hoa' })),
    ...NHA_KON_XOM_LUH_CONTACTS.map(m => ({ ...m, type: 'nha_kon_xom_luh' })),
    ...NHA_TAN_LAP_CONTACTS.map(m => ({ ...m, type: 'nha_tan_lap' })),
    ...NHA_MANG_DEN_CONTACTS.map(m => ({ ...m, type: 'nha_mang_den' })),
    ...NHA_LANG_NAM_CONTACTS.map(m => ({ ...m, type: 'nha_lang_nam' })),
    ...CONG_DOAN_KHANH_SON_CONTACTS.map(m => ({ ...m, type: 'cong_doan_khanh_son' })),
    ...CONG_DOAN_CAN_THO_CONTACTS.map(m => ({ ...m, type: 'cong_doan_can_tho' })),
    ...CONG_DOAN_HUONG_PHUONG_CONTACTS.map(m => ({ ...m, type: 'cong_doan_huong_phuong' })),
    ...CONG_DOAN_BAC_TAN_UYEN_CONTACTS.map(m => ({ ...m, type: 'cong_doan_bac_tan_uyen' })),
    ...CONG_DOAN_CHI_LANG_CONTACTS.map(m => ({ ...m, type: 'cong_doan_chi_lang' })),
    ...CONG_DOAN_HOI_YEN_CONTACTS.map(m => ({ ...m, type: 'cong_doan_hoi_yen' })),
    ...CONG_DOAN_PHONG_LOI_CONTACTS.map(m => ({ ...m, type: 'cong_doan_phong_loi' })),
    ...CONG_DOAN_PHINH_HO_CONTACTS.map(m => ({ ...m, type: 'cong_doan_phinh_ho' })),
    ...CONG_DOAN_HOA_KY_CONTACTS.map(m => ({ ...m, type: 'cong_doan_hoa_ky' })),
    ...CONG_DOAN_PHAP_CONTACTS.map(m => ({ ...m, type: 'cong_doan_phap' })),
    ...CONG_DOAN_TAY_BAN_NHA_CONTACTS.map(m => ({ ...m, type: 'cong_doan_tay_ban_nha' })),
    ...CONG_DOAN_HA_LAN_CONTACTS.map(m => ({ ...m, type: 'cong_doan_ha_lan' })),
    ...CONG_DOAN_PAKISTAN_CONTACTS.map(m => ({ ...m, type: 'cong_doan_pakistan' })),
    ...CONG_DOAN_DAI_LOAN_CONTACTS.map(m => ({ ...m, type: 'cong_doan_dai_loan' })),
    ...CONG_DOAN_PNG_CONTACTS.map(m => ({ ...m, type: 'cong_doan_png' })),
    ...CONG_DOAN_NHAT_CONTACTS.map(m => ({ ...m, type: 'cong_doan_nhat' })),
    ...CONG_DOAN_LAO_CONTACTS.map(m => ({ ...m, type: 'cong_doan_lao' })),
    ...CONG_DOAN_COSTA_RICA_CONTACTS.map(m => ({ ...m, type: 'cong_doan_costa_rica' })),
    ...CONG_DOAN_HAN_QUOC_CONTACTS.map(m => ({ ...m, type: 'cong_doan_han_quoc' })),
    ...DU_HOC_PHAP_CONTACTS.map(m => ({ ...m, type: 'du_hoc_phap' })),
    ...DU_HOC_HOA_KY_CONTACTS.map(m => ({ ...m, type: 'du_hoc_hoa_ky' })),
    ...DU_HOC_AUSTRALIA_CONTACTS.map(m => ({ ...m, type: 'du_hoc_australia' })),
    ...DU_HOC_Y_CONTACTS.map(m => ({ ...m, type: 'du_hoc_y' })),
    ...DU_HOC_PHILIPPINES_CONTACTS.map(m => ({ ...m, type: 'du_hoc_philippines' }))
  ], []);

  const sortedAllMembers = useMemo(() => {
    return [...ALL_MEMBERS]
      .filter(m => m.type !== 'council' && m.type !== 'special' && m.type !== 'media' && m.type !== 'finance' && m.type !== 'director' && m.type !== 'investigation' && m.type !== 'liturgy' && m.type !== 'evangelization')
      .sort((a, b) => {
        const getLastWord = (fullName: string) => {
          const trimmed = (fullName || '').trim();
          const parts = trimmed.split(/\s+/);
          return parts[parts.length - 1] || '';
        };
        const nameA = getLastWord(a.name);
        const nameB = getLastWord(b.name);
        const cmp = nameA.localeCompare(nameB, 'vi');
        if (cmp !== 0) return cmp;
        return (a.name || '').localeCompare(b.name || '', 'vi');
      });
  }, [ALL_MEMBERS]);

  const getHouseName = (type: string) => {
    switch (type) {
      case 'council': return 'Ban Điều Hành';
      case 'finance': return 'Ban Tài Chính';
      case 'special': return 'Ban Thư Ký';
      case 'director': return 'Bổ Nhiệm Giám Đốc';
      case 'media': return 'Ban Truyền Thông';
      case 'investigation': return 'Ban Điều Tra';
      case 'liturgy': return 'Ban Phụng Vụ';
      case 'evangelization': return 'Ban Đại Phúc';
      case 'nha_tinh': return 'Nhà Tỉnh';
      case 'nha_da_lat': return 'Nhà Đà Lạt';
      case 'nha_ka_don_proh': return 'Nhà Ka Đơn - Próh';
      case 'nha_phuong_lam': return 'Nhà Phương Lâm';
      case 'nha_tuc_trung': return 'Nhà Túc Trưng';
      case 'nha_nguyen_kiem': return 'Nhà Nguyễn Kiệm';
      case 'nha_binh_chanh': return 'Nhà Bình Chánh';
      case 'nha_nha_trang': return 'Nhà Nha Trang';
      case 'nha_bung_ke': return 'Nhà Bưng Kè';
      case 'nha_dak_song': return 'Nhà Đắk Song';
      case 'nha_xuan_hoa': return 'Nhà Xuân Hoà';
      case 'nha_kon_xom_luh': return 'Nhà Kon Xơm Lũh';
      case 'nha_tan_lap': return 'Nhà Tân Lập';
      case 'nha_mang_den': return 'Nhà Măng Đen';
      case 'nha_lang_nam': return 'Nhà Làng Nam';
      case 'cong_doan_khanh_son': return 'Cộng Đoàn Khánh Sơn';
      case 'cong_doan_can_tho': return 'Cộng Đoàn Cần Thơ';
      case 'cong_doan_huong_phuong': return 'Cộng Đoàn Hướng Phương';
      case 'cong_doan_bac_tan_uyen': return 'Cộng Đoàn Bắc Tân Uyên';
      case 'cong_doan_chi_lang': return 'Cộng Đoàn Chi Lăng';
      case 'cong_doan_hoi_yen': return 'Cộng Đoàn Hội Yên';
      case 'cong_doan_phong_loi': return 'Cộng Đoàn Phong Lôi';
      case 'cong_doan_phinh_ho': return 'Cộng Đoàn Phình Hồ';
      case 'cong_doan_hoa_ky': return 'Hoa Kỳ';
      case 'cong_doan_phap': return 'Pháp';
      case 'cong_doan_tay_ban_nha': return 'Tây Ban Nha';
      case 'cong_doan_ha_lan': return 'Hà Lan';
      case 'cong_doan_pakistan': return 'Pakistan';
      case 'cong_doan_dai_loan': return 'Đài Loan';
      case 'cong_doan_png': return 'Papua New Guinea';
      case 'cong_doan_nhat': return 'Nhật Bản';
      case 'cong_doan_lao': return 'Lào';
      case 'cong_doan_costa_rica': return 'Costa Rica';
      case 'cong_doan_han_quoc': return 'Hàn Quốc';
      case 'du_hoc_phap': return 'Du Học Pháp';
      case 'du_hoc_hoa_ky': return 'Du Học Hoa Kỳ';
      case 'du_hoc_australia': return 'Du Học Australia';
      case 'du_hoc_y': return 'Du Học Ý';
      case 'du_hoc_philippines': return 'Du Học Philippines';
      default: return '';
    }
  };

  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) return [];
    const term = searchTerm.toLowerCase();
    return ALL_MEMBERS.filter(member => 
      member.name.toLowerCase().includes(term)
    );
  }, [searchTerm, ALL_MEMBERS]);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    setSearchTerm('');
    setIsSearching(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMemberClick = (member: any) => {
    setIsSearching(false);
    setSearchTerm('');
    
    let targetPage = 1;
    if (member.type === 'nha_tinh') targetPage = 2;
    else if (member.type === 'nha_da_lat') targetPage = 3;
    else if (member.type === 'nha_ka_don_proh') targetPage = 4;
    else if (member.type === 'nha_phuong_lam') targetPage = 5;
    else if (member.type === 'nha_tuc_trung') targetPage = 6;
    else if (member.type === 'nha_nguyen_kiem') targetPage = 7;
    else if (member.type === 'nha_binh_chanh') targetPage = 8;
    else if (member.type === 'nha_nha_trang') targetPage = 9;
    else if (member.type === 'nha_bung_ke') targetPage = 10;
    else if (member.type === 'nha_dak_song') targetPage = 11;
    else if (member.type === 'nha_xuan_hoa') targetPage = 12;
    else if (member.type === 'nha_kon_xom_luh') targetPage = 13;
    else if (member.type === 'nha_tan_lap') targetPage = 14;
    else if (member.type === 'nha_mang_den') targetPage = 15;
    else if (member.type === 'nha_lang_nam') targetPage = 16;
    else if (member.type === 'cong_doan_khanh_son') targetPage = 17;
    else if (member.type === 'cong_doan_can_tho') targetPage = 18;
    else if (member.type === 'cong_doan_huong_phuong') targetPage = 19;
    else if (member.type === 'cong_doan_bac_tan_uyen') targetPage = 20;
    else if (member.type === 'cong_doan_chi_lang') targetPage = 21;
    else if (member.type === 'cong_doan_hoi_yen') targetPage = 22;
    else if (member.type === 'cong_doan_phong_loi') targetPage = 23;
    else if (member.type === 'cong_doan_phinh_ho') targetPage = 24;
    else if (member.type === 'cong_doan_hoa_ky') targetPage = 25;
    else if (member.type === 'cong_doan_phap') targetPage = 26;
    else if (member.type === 'cong_doan_tay_ban_nha') targetPage = 27;
    else if (member.type === 'cong_doan_ha_lan') targetPage = 28;
    else if (member.type === 'cong_doan_pakistan') targetPage = 29;
    else if (member.type === 'cong_doan_dai_loan') targetPage = 30;
    else if (member.type === 'cong_doan_png') targetPage = 31;
    else if (member.type === 'cong_doan_nhat') targetPage = 32;
    else if (member.type === 'cong_doan_lao') targetPage = 33;
    else if (member.type === 'cong_doan_costa_rica') targetPage = 34;
    else if (member.type === 'cong_doan_han_quoc') targetPage = 40;
    else if (member.type === 'du_hoc_phap') targetPage = 35;
    else if (member.type === 'du_hoc_hoa_ky') targetPage = 36;
    else if (member.type === 'du_hoc_australia') targetPage = 37;
    else if (member.type === 'du_hoc_y') targetPage = 38;
    else if (member.type === 'du_hoc_philippines') targetPage = 39;
    
    setCurrentPage(targetPage);
    
    // Use a small timeout to ensure the DOM has rendered the new page before scrolling
    setTimeout(() => {
      const element = document.getElementById(member.id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // Add a temporary highlight effect
        element.classList.add('ring-4', 'ring-blue-500/30', 'border-blue-500');
        setTimeout(() => {
          element.classList.remove('ring-4', 'ring-blue-500/30', 'border-blue-500');
        }, 2000);
      } else {
        // Fallback to top if element not found (should not happen for defined types)
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 200);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 selection:bg-blue-100 font-sans relative overflow-hidden">
        {/* Abstract background decorative elements */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-50 rounded-full blur-3xl" />
        
        <div className="w-full max-w-md relative z-10 animate-in fade-in slide-in-from-bottom-6 duration-500">
          {/* Logo / Badge Area */}
          <div className="text-center mb-8">
            <div className="inline-flex w-16 h-16 bg-blue-600 rounded-2xl items-center justify-center text-white shadow-xl shadow-blue-600/20 mb-4 transform hover:rotate-3 transition-transform">
              <Lock size={32} />
            </div>
            <h1 className="text-2xl font-black text-gray-900 tracking-tight">Khu Vực Giới Hạn</h1>
            <p className="text-sm text-gray-500 mt-1">Danh bạ Tỉnh Dòng Vinh Sơn Việt Nam</p>
          </div>

          {/* Card */}
          <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-xl shadow-slate-900/5 relative">
            <form onSubmit={handleLogin} className="space-y-6">
              {loginError && (
                <div className="p-4 bg-red-50 border border-red-100 rounded-2xl text-xs text-red-600 font-medium leading-relaxed">
                  {loginError}
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Tên Đăng Nhập (ID)</label>
                <div className="relative">
                  <input
                    type="text"
                    value={idInput}
                    onChange={(e) => { setIdInput(e.target.value); if (loginError) setLoginError(''); }}
                    className="w-full bg-slate-50 border border-gray-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 rounded-2xl py-3.5 pl-4 pr-10 text-sm font-semibold transition-all outline-none text-gray-900"
                    placeholder="Nhập Tên đăng nhập (ID)..."
                    required
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <User size={18} />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Mật Khẩu</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={passwordInput}
                    onChange={(e) => { setPasswordInput(e.target.value); if (loginError) setLoginError(''); }}
                    className="w-full bg-slate-50 border border-gray-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 rounded-2xl py-3.5 pl-4 pr-12 text-sm font-semibold transition-all outline-none text-gray-900"
                    placeholder="Nhập Mật khẩu..."
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors focus:outline-none"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white rounded-2xl py-4 text-sm font-bold shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 hover:bg-blue-700 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <Lock size={16} />
                <span>Xác Nhận Đăng Nhập</span>
              </button>
            </form>
          </div>

          <div className="text-center mt-6 text-xs text-gray-400">
            <p>Vui lòng liên hệ Ban Truyền Thông để được cấp quyền truy cập.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-blue-100">
      {/* Blue Top Border */}
      <div className="h-3 bg-blue-500 w-full fixed top-0 left-0 z-50" id="top-border" />

      {/* Header */}
      <header className="border-b border-gray-100 sticky top-3 bg-white/80 backdrop-blur-md z-40 px-6 py-4 shadow-sm" id="header">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => goToPage(1)}>
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
              <User size={24} />
            </div>
            <div>
              <h1 className="font-bold text-xl tracking-tight">Danh Bạ Liên Hệ</h1>
              <p className="text-xs text-gray-400 font-medium uppercase tracking-widest">Thành viên chính thức</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className={`relative flex items-center transition-all duration-300 ${isSearching ? 'w-64' : 'w-10'}`}>
              <input
                type="text"
                placeholder="Tìm tên thành viên..."
                className={`w-full py-2 pl-10 pr-4 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all ${isSearching ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button 
                onClick={() => {
                  setIsSearching(!isSearching);
                  if (isSearching) setSearchTerm('');
                }}
                className={`absolute left-0 p-2.5 rounded-full transition-all ${isSearching ? 'text-blue-600' : 'text-gray-500 hover:bg-gray-100'}`}
              >
                {isSearching && searchTerm ? <X size={20} onClick={(e) => { e.stopPropagation(); setSearchTerm(''); }} /> : <Search size={20} />}
              </button>
            </div>

            <button
              onClick={handleLogout}
              className="p-2.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all flex items-center justify-center shrink-0"
              title="Đăng xuất"
            >
              <LogOut size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12" id="main-content">
        {searchTerm.trim() !== '' ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-black text-gray-900">Kết quả tìm kiếm</h2>
                <p className="text-sm text-gray-500">Tìm thấy {searchResults.length} thành viên cho "{searchTerm}"</p>
              </div>
              <button 
                onClick={() => setSearchTerm('')}
                className="text-sm font-bold text-blue-600 hover:underline"
              >
                Xóa tìm kiếm
              </button>
            </div>

            <div className="grid gap-4">
              {searchResults.map((member) => (
                <div 
                  key={`${member.type}-${member.id}`}
                  onClick={() => handleMemberClick(member)}
                  className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-lg hover:shadow-blue-900/5 hover:border-blue-500 transition-all group cursor-pointer"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:scale-110 shadow-sm">
                        <User size={24} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-0.5">
                          <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">{member.role}</div>
                          <div className="w-1 h-1 bg-gray-300 rounded-full" />
                          <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{getHouseName(member.type)}</div>
                        </div>
                        <div className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{member.name}</div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 sm:gap-x-8">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Phone size={14} className="text-gray-300" />
                        <span className="font-medium">{(member as any).phone}</span>
                      </div>
                      {(member as any).birthDate && (
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Calendar size={14} className="text-gray-300" />
                          <span>NS: {(member as any).birthDate}</span>
                        </div>
                      )}
                      {(member as any).email && (member as any).email !== 'Chưa cập nhật' && (
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Mail size={14} className="text-gray-300" />
                          <span className="max-w-[150px] truncate">{(member as any).email}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1.5 text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-all">
                        <span>Xem chi tiết</span>
                        <ArrowLeft size={12} className="rotate-180" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {searchResults.length === 0 && (
                <div className="py-20 text-center bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                  <Search size={48} className="mx-auto text-gray-200 mb-4" />
                  <h3 className="text-lg font-bold text-gray-900">Không tìm thấy thành viên</h3>
                  <p className="text-gray-500">Vui lòng thử lại với tên khác.</p>
                </div>
              )}
            </div>
          </div>
        ) : currentPage === 1 ? (
          <>
            <div className="mb-12 text-center relative">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full mb-4">
                Cơ sở dữ liệu nhân sự
              </div>
              <h2 className="text-2xl md:text-3xl font-black mb-4 tracking-tight text-gray-900 mx-auto max-w-2xl leading-snug">
                Tu Hội Truyền Giáo Vinh Sơn<br />
                <span className="text-xl md:text-2xl font-bold text-blue-600 block mt-1">Tỉnh Dòng Việt Nam</span>
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
                Hệ thống quản lý thông tin liên hệ chính thống dành cho thành viên của Tu Hội.
              </p>
              
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                <div 
                  onClick={() => goToPage(41)}
                  className="bg-gray-50 rounded-2xl p-4 border border-blue-100 hover:border-blue-300 hover:bg-blue-50/50 shadow-sm cursor-pointer transition-all group"
                >
                  <div className="text-2xl font-bold text-blue-600 tabular-nums group-hover:scale-105 transition-transform origin-left">175</div>
                  <div className="text-[10px] uppercase tracking-wider text-gray-400 font-bold group-hover:text-blue-600 transition-colors">Tổng thành viên</div>
                </div>
                <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 shadow-sm">
                  <div className="text-2xl font-bold text-gray-900 tabular-nums">46.4</div>
                  <div className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Độ tuổi TB</div>
                </div>
                <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 shadow-sm">
                  <div className="text-2xl font-bold text-gray-900 tabular-nums">159</div>
                  <div className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Linh Mục</div>
                </div>
                <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 shadow-sm">
                  <div className="text-2xl font-bold text-gray-900 tabular-nums">11</div>
                  <div className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Phó tế</div>
                </div>
                <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100 shadow-sm">
                  <div className="text-2xl font-bold text-gray-900 tabular-nums">5</div>
                  <div className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Tu Huynh</div>
                </div>
              </div>
            </div>

            {/* Ban Điều Hành Tỉnh Dòng Section */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gray-100" />
                <h3 className="text-sm uppercase tracking-[0.3em] font-black text-blue-600">Ban Điều Hành Tỉnh Dòng</h3>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {COUNCIL_MEMBERS.map((member) => (
                  <div 
                    key={member.id}
                    id={member.id}
                    className="bg-white border border-gray-100 p-4 rounded-xl flex items-center gap-4 hover:border-blue-200 transition-all shadow-sm"
                  >
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-sm border border-gray-50">
                      <User size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">{member.role}</div>
                      <div className="font-bold text-gray-900">{member.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gray-100" />
                <h3 className="text-sm uppercase tracking-[0.3em] font-black text-blue-600">Ban Tài Chính</h3>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {FINANCE_COMMISSION_MEMBERS.map((member) => (
                  <div 
                    key={member.id}
                    id={member.id}
                    className="bg-white border border-gray-100 p-4 rounded-xl flex items-center gap-4 hover:border-blue-200 transition-all shadow-sm"
                  >
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-sm border border-gray-50">
                      <User size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">{member.role}</div>
                      <div className="font-bold text-gray-900">{member.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ban Thư Ký Section */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gray-100" />
                <h3 className="text-sm uppercase tracking-[0.3em] font-black text-blue-600">Ban Thư Ký</h3>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                {SPECIAL_APPOINTMENTS.map((member) => (
                  <div 
                    key={member.id}
                    id={member.id}
                    className="bg-white border border-gray-100 p-4 rounded-xl flex items-center gap-4 hover:border-blue-200 transition-all shadow-sm"
                  >
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-sm border border-gray-50">
                      <User size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">{member.role}</div>
                      <div className="font-bold text-gray-900">{member.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bổ Nhiệm Giám Đốc Section */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gray-100" />
                <h3 className="text-sm uppercase tracking-[0.3em] font-black text-blue-600">Bổ Nhiệm Giám Đốc</h3>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                {DIRECTOR_APPOINTMENTS.map((member) => (
                  <div 
                    key={member.id}
                    id={member.id}
                    className="bg-white border border-gray-100 p-4 rounded-xl flex items-center gap-4 hover:border-blue-200 transition-all shadow-sm"
                  >
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-sm border border-gray-50">
                      <User size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">{member.role}</div>
                      <div className="font-bold text-gray-900">{member.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ban Truyền Thông Section */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gray-100" />
                <h3 className="text-sm uppercase tracking-[0.3em] font-black text-blue-600">Ban Truyền Thông</h3>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
                {MEDIA_COMMISSION_MEMBERS.map((member) => (
                  <div 
                    key={member.id}
                    id={member.id}
                    className="bg-white border border-gray-100 p-4 rounded-xl flex items-center gap-4 hover:border-blue-200 transition-all shadow-sm mx-auto w-full max-w-md"
                  >
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-sm border border-gray-50">
                      <User size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">{member.role}</div>
                      <div className="font-bold text-gray-900">{member.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ban Điều Tra Section */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gray-100" />
                <h3 className="text-sm uppercase tracking-[0.3em] font-black text-blue-600">Ban Điều Tra</h3>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                {INVESTIGATION_BOARD_MEMBERS.map((member) => (
                  <div 
                    key={member.id}
                    id={member.id}
                    className="bg-white border border-gray-100 p-4 rounded-xl flex items-center gap-4 hover:border-blue-200 transition-all shadow-sm"
                  >
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-sm border border-gray-50">
                      <User size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">{member.role}</div>
                      <div className="font-bold text-gray-900">{member.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ban Phụng Vụ Section */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gray-100" />
                <h3 className="text-sm uppercase tracking-[0.3em] font-black text-blue-600">Ban Phụng Vụ</h3>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
                {LITURGY_BOARD_MEMBERS.map((member) => (
                  <div 
                    key={member.id}
                    id={member.id}
                    className="bg-white border border-gray-100 p-4 rounded-xl flex items-center gap-4 hover:border-blue-200 transition-all shadow-sm mx-auto w-full max-w-md"
                  >
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-sm border border-gray-50">
                      <User size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">{member.role}</div>
                      <div className="font-bold text-gray-900">{member.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ban Đại Phúc Section */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gray-100" />
                <h3 className="text-sm uppercase tracking-[0.3em] font-black text-blue-600">Ban Đại Phúc</h3>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                {EVANGELIZATION_BOARD_MEMBERS.map((member) => (
                  <div 
                    key={member.id}
                    id={member.id}
                    className="bg-white border border-gray-100 p-4 rounded-xl flex items-center gap-4 hover:border-blue-200 transition-all shadow-sm"
                  >
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-sm border border-gray-50">
                      <User size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">{member.role}</div>
                      <div className="font-bold text-gray-900">{member.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Các Nhà Theo Giáo Luật Section */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gray-100" />
                <h3 className="text-sm uppercase tracking-[0.3em] font-black text-blue-600">Các Nhà Theo Giáo Luật</h3>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {CANONICAL_HOUSES.map((house, index) => (
                  <div 
                    key={index}
                    onClick={() => {
                      if (house === "Nhà Tỉnh") goToPage(2);
                      if (house === "Nhà Đà Lạt") goToPage(3);
                      if (house === "Nhà Ka Đơn - Próh") goToPage(4);
                      if (house === "Nhà Phương Lâm") goToPage(5);
                      if (house === "Nhà Túc Trưng") goToPage(6);
                      if (house === "Nhà Nguyễn Kiệm") goToPage(7);
                      if (house === "Nhà Bình Chánh") goToPage(8);
                      if (house === "Nhà Nha Trang") goToPage(9);
                      if (house === "Nhà Bưng Kè") goToPage(10);
                      if (house === "Nhà Đắk Song") goToPage(11);
                      if (house === "Nhà Xuân Hoà") goToPage(12);
                      if (house === "Nhà Kon Xơm Lũh") goToPage(13);
                      if (house === "Nhà Tân Lập") goToPage(14);
                      if (house === "Nhà Măng Đen") goToPage(15);
                      if (house === "Nhà Làng Nam") goToPage(16);
                    }}
                    className={`bg-gray-50 border border-gray-100 p-3 rounded-lg flex items-center justify-center text-center hover:bg-blue-50 hover:border-blue-200 transition-all group ${(house === "Nhà Tỉnh" || house === "Nhà Đà Lạt" || house === "Nhà Ka Đơn - Próh" || house === "Nhà Phương Lâm" || house === "Nhà Túc Trưng" || house === "Nhà Nguyễn Kiệm" || house === "Nhà Bình Chánh" || house === "Nhà Nha Trang" || house === "Nhà Bưng Kè" || house === "Nhà Đắk Song" || house === "Nhà Xuân Hoà" || house === "Nhà Kon Xơm Lũh" || house === "Nhà Tân Lập" || house === "Nhà Măng Đen" || house === "Nhà Làng Nam") ? 'cursor-pointer border-blue-100 bg-blue-50/30' : 'cursor-default'}`}
                  >
                    <span className={`text-sm font-bold ${(house === "Nhà Tỉnh" || house === "Nhà Đà Lạt" || house === "Nhà Ka Đơn - Próh" || house === "Nhà Phương Lâm" || house === "Nhà Túc Trưng" || house === "Nhà Nguyễn Kiệm" || house === "Nhà Bình Chánh" || house === "Nhà Nha Trang" || house === "Nhà Bưng Kè" || house === "Nhà Đắk Song" || house === "Nhà Xuân Hoà" || house === "Nhà Kon Xơm Lũh" || house === "Nhà Tân Lập" || house === "Nhà Măng Đen" || house === "Nhà Làng Nam") ? 'text-blue-700' : 'text-gray-700'} group-hover:text-blue-700`}>{house}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Các Cộng Đoàn - Giáo Xứ Như Nhà Section */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gray-100" />
                <h3 className="text-sm uppercase tracking-[0.3em] font-black text-blue-600">Các Cộng Đoàn Như Nhà</h3>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {COMMUNITIES.map((community, index) => (
                  <div 
                    key={index}
                    onClick={() => {
                      if (community === "Cộng Đoàn Khánh Sơn") goToPage(17);
                      else if (community === "Cộng Đoàn Cần Thơ") goToPage(18);
                      else if (community === "Cộng Đoàn Hướng Phương") goToPage(19);
                      else if (community === "Cộng Đoàn Bắc Tân Uyên") goToPage(20);
                      else if (community === "Cộng Đoàn Chi Lăng") goToPage(21);
                      else if (community === "Cộng Đoàn Hội Yên") goToPage(22);
                      else if (community === "Cộng Đoàn Phong Lôi") goToPage(23);
                      else if (community === "Cộng Đoàn Phình Hồ") goToPage(24);
                    }}
                    className={`bg-gray-50 border border-gray-100 p-3 rounded-lg flex items-center justify-center text-center hover:bg-blue-50 hover:border-blue-200 transition-all group ${(community === "Cộng Đoàn Khánh Sơn" || community === "Cộng Đoàn Cần Thơ" || community === "Cộng Đoàn Hướng Phương" || community === "Cộng Đoàn Bắc Tân Uyên" || community === "Cộng Đoàn Chi Lăng" || community === "Cộng Đoàn Hội Yên" || community === "Cộng Đoàn Phong Lôi" || community === "Cộng Đoàn Phình Hồ") ? 'cursor-pointer border-blue-100 bg-blue-50/30' : 'cursor-default'}`}
                  >
                    <span className={`text-sm font-bold ${(community === "Cộng Đoàn Khánh Sơn" || community === "Cộng Đoàn Cần Thơ" || community === "Cộng Đoàn Hướng Phương" || community === "Cộng Đoàn Bắc Tân Uyên" || community === "Cộng Đoàn Chi Lăng" || community === "Cộng Đoàn Hội Yên" || community === "Cộng Đoàn Phong Lôi" || community === "Cộng Đoàn Phình Hồ") ? 'text-blue-700' : 'text-gray-700'} group-hover:text-blue-700`}>{community}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sứ Vụ Du Học - Truyền Giáo Quốc Tế Section */}
            <div className="mb-20">
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px w-8 bg-blue-200" />
                  <h4 className="text-xs font-bold text-blue-600 uppercase tracking-widest">Truyền Giáo Quốc tế (AD GENTES)</h4>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                  {MISSION_LOCATIONS_AD_GENTES.map((location, index) => {
                    const isInteractive = location === "Hoa Kỳ" || location === "Pháp" || location === "Tây Ban Nha" || location === "Hà Lan" || location === "Pakistan" || location === "Đài Loan" || location === "Papua New Guinea" || location === "Nhật" || location === "Lào" || location === "Costa Rica" || location === "Australia" || location === "Hàn Quốc";
                    return (
                      <div 
                        key={index}
                        onClick={() => {
                          if (location === "Hoa Kỳ") {
                            goToPage(25);
                          } else if (location === "Pháp") {
                            goToPage(26);
                          } else if (location === "Tây Ban Nha") {
                            goToPage(27);
                          } else if (location === "Hà Lan") {
                            goToPage(28);
                          } else if (location === "Pakistan") {
                            goToPage(29);
                          } else if (location === "Đài Loan") {
                            goToPage(30);
                          } else if (location === "Papua New Guinea") {
                            goToPage(31);
                          } else if (location === "Nhật") {
                            goToPage(32);
                          } else if (location === "Lào") {
                            goToPage(33);
                          } else if (location === "Costa Rica") {
                            goToPage(34);
                          } else if (location === "Australia") {
                            goToPage(37);
                          } else if (location === "Hàn Quốc") {
                            goToPage(40);
                          }
                        }}
                        className={`bg-gray-50 border border-gray-100 p-3 rounded-lg flex items-center justify-center text-center hover:bg-blue-50 hover:border-blue-200 transition-all group ${isInteractive ? 'cursor-pointer border-blue-100 bg-blue-50/30' : 'cursor-default'}`}
                      >
                        <span className={`text-sm font-bold ${isInteractive ? 'text-blue-700 font-extrabold' : 'text-gray-700'} group-hover:text-blue-700`}>{location}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px w-8 bg-blue-200" />
                  <h4 className="text-xs font-bold text-blue-600 uppercase tracking-widest">Du Học</h4>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                  {STUDY_ABROAD_LOCATIONS.map((location, index) => {
                    const isInteractive = location === "Pháp" || location === "Hoa Kỳ" || location === "Ý" || location === "Philippines";
                    return (
                      <div 
                        key={index}
                        onClick={() => {
                          if (location === "Pháp") {
                            goToPage(35);
                          } else if (location === "Hoa Kỳ") {
                            goToPage(36);
                          } else if (location === "Ý") {
                            goToPage(38);
                          } else if (location === "Philippines") {
                            goToPage(39);
                          }
                        }}
                        className={`bg-gray-50 border border-gray-100 p-3 rounded-lg flex items-center justify-center text-center hover:bg-blue-50 hover:border-blue-200 transition-all group ${isInteractive ? 'cursor-pointer border-blue-100 bg-blue-50/30 shadow-sm' : 'cursor-default'}`}
                      >
                        <span className={`text-sm font-bold uppercase ${isInteractive ? 'text-blue-700 font-extrabold' : 'text-gray-700'} group-hover:text-blue-700`}>{location}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </>
        ) : currentPage === 2 ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button 
              onClick={() => goToPage(1)}
              className="flex items-center gap-2 text-blue-600 font-bold mb-8 hover:translate-x-[-4px] transition-transform"
            >
              <ArrowLeft size={20} />
              <span>Quay lại trang chủ</span>
            </button>

            <div className="mb-12">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full mb-4">
                Danh mục chi tiết
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-gray-900 italic">
                Nhà Tỉnh
              </h2>
              <div className="h-1 w-20 bg-blue-600 rounded-full mb-8" />

              {/* Intro Section */}
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 mb-12 shadow-sm">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Thành Lập</div>
                      <div className="font-bold text-gray-900">Năm 1974</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Địa chỉ</div>
                      <div className="font-bold text-gray-900 leading-tight">38 Trần Phú, Phường Xuân Hương, Đà Lạt, Lâm Đồng</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Bổn Mạng</div>
                      <div className="font-bold text-gray-900">Thánh Vinh Sơn Phaolô</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gray-100" />
                <h3 className="text-sm uppercase tracking-[0.3em] font-black text-blue-600">Các Thành Viên</h3>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
            </div>

            <div className="grid gap-6">
              {NHA_TINH_CONTACTS.map((contact) => (
                <div 
                  key={contact.id}
                  id={contact.id}
                  className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all group overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-100/50 transition-colors" />
                  
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-300 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                          <User size={28} />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">{contact.role}</div>
                          <div className="text-2xl font-black text-gray-900 tracking-tight">{contact.name}</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 border-t border-gray-50 pt-4 md:border-none md:pt-0">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Phone size={16} />
                          </div>
                          <span className="font-bold">{contact.phone}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Mail size={16} />
                          </div>
                          <span className="font-bold">{contact.email}</span>
                        </div>
                      </div>
                    </div>

                    {contact.birthDate && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-50">
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Ngày sinh</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.birthDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Vào Nhà Tập</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.novitiateDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Khấn trọn</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.vowsDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Chịu chức</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.ordinationDate}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : currentPage === 3 ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button 
              onClick={() => goToPage(1)}
              className="flex items-center gap-2 text-blue-600 font-bold mb-8 hover:translate-x-[-4px] transition-transform"
            >
              <ArrowLeft size={20} />
              <span>Quay lại trang chủ</span>
            </button>
            <div className="mb-12">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full mb-4">
                Danh mục chi tiết
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-gray-900 italic">
                Nhà Đà Lạt <span className="text-blue-600">(Học Viện Durando)</span>
              </h2>
              <div className="h-1 w-20 bg-blue-600 rounded-full mb-8" />

              {/* Intro Section */}
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 mb-12 shadow-sm">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Thành Lập</div>
                      <div className="font-bold text-gray-900">Năm 1974</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Địa chỉ</div>
                      <div className="font-bold text-gray-900 leading-tight">51 Yết Kiêu, Phường Cam Ly, Đà Lạt, Lâm Đồng</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Bổn Mạng</div>
                      <div className="font-bold text-gray-900">Chân Phước Durando</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gray-100" />
                <h3 className="text-sm uppercase tracking-[0.3em] font-black text-blue-600">Các Thành Viên</h3>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
            </div>

            <div className="grid gap-6">
              {NHA_DA_LAT_CONTACTS.map((contact) => (
                <div 
                  key={contact.id}
                  id={contact.id}
                  className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all group overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-100/50 transition-colors" />
                  
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-300 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                          <User size={28} />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">{contact.role}</div>
                          <div className="text-2xl font-black text-gray-900 tracking-tight">{contact.name}</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 border-t border-gray-50 pt-4 md:border-none md:pt-0">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Phone size={16} />
                          </div>
                          <span className="font-bold">{contact.phone}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Mail size={16} />
                          </div>
                          <span className="font-bold">{contact.email || "Chưa cập nhật"}</span>
                        </div>
                      </div>
                    </div>

                    {contact.birthDate && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-50">
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Ngày sinh</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.birthDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Vào Nhà Tập</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.novitiateDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Khấn trọn</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.vowsDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Chịu chức</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.ordinationDate || "—"}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : currentPage === 4 ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button 
              onClick={() => goToPage(1)}
              className="flex items-center gap-2 text-blue-600 font-bold mb-8 hover:translate-x-[-4px] transition-transform"
            >
              <ArrowLeft size={20} />
              <span>Quay lại trang chủ</span>
            </button>
            <div className="mb-12">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full mb-4">
                Danh mục chi tiết
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-gray-900 italic">
                Nhà Ka Đơn - Próh
              </h2>
              <div className="h-1 w-20 bg-blue-600 rounded-full mb-8" />

              {/* Intro Section */}
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 mb-12 shadow-sm">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Thành Lập</div>
                      <div className="font-bold text-gray-900">Năm 1995</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Địa chỉ</div>
                      <div className="font-bold text-gray-900 leading-tight">118 Núi Trọc, thôn Quảng Lợi, xã Quảng Lập, Đơn Dương, Lâm Đồng</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Bổn Mạng</div>
                      <div className="font-bold text-gray-900">Chân phước Pierre René Rogue</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gray-100" />
                <h3 className="text-sm uppercase tracking-[0.3em] font-black text-blue-600">Các Thành Viên</h3>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
            </div>

            <div className="grid gap-6">
              {NHA_KA_DON_PROH_CONTACTS.length > 0 ? NHA_KA_DON_PROH_CONTACTS.map((contact: any) => (
                <div 
                  key={contact.id}
                  id={contact.id}
                  className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all group overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-100/50 transition-colors" />
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-300 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                          <User size={28} />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">{contact.role}</div>
                          <div className="text-2xl font-black text-gray-900 tracking-tight">{contact.name}</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 border-t border-gray-50 pt-4 md:border-none md:pt-0">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Phone size={16} />
                          </div>
                          <span className="font-bold">{contact.phone}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Mail size={16} />
                          </div>
                          <span className="font-bold">{contact.email || "Chưa cập nhật"}</span>
                        </div>
                      </div>
                    </div>
                    {contact.birthDate && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-50">
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Ngày sinh</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.birthDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Vào Nhà Tập</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.novitiateDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Khấn trọn</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.vowsDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Chịu chức</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.ordinationDate || "—"}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )) : (
                <div className="bg-gray-50 border border-gray-200 rounded-3xl p-12 text-center border-dashed">
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                    <User size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Đang cập nhật thành viên</h3>
                  <p className="text-gray-500 max-w-sm mx-auto">Thông tin chi tiết về các thành viên tại Nhà Ka Đơn - Próh sẽ sớm được bổ sung vào hệ thống.</p>
                </div>
              )}
            </div>
          </div>
        ) : currentPage === 5 ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button 
              onClick={() => goToPage(1)}
              className="flex items-center gap-2 text-blue-600 font-bold mb-8 hover:translate-x-[-4px] transition-transform"
            >
              <ArrowLeft size={20} />
              <span>Quay lại trang chủ</span>
            </button>
            <div className="mb-12">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full mb-4">
                Danh mục chi tiết
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-gray-900 italic">
                Nhà Phương Lâm
              </h2>
              <div className="h-1 w-20 bg-blue-600 rounded-full mb-8" />

              {/* Intro Section */}
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 mb-12 shadow-sm">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Thành Lập</div>
                      <div className="font-bold text-gray-900">Năm 2001</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Địa chỉ</div>
                      <div className="font-bold text-gray-900 leading-tight">1 Ấp Phú Hợp A, xã Phú Bình, huyện Tân Phú, Đồng Nai</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Bổn Mạng</div>
                      <div className="font-bold text-gray-900">Các Thánh Tử Đạo Việt Nam</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gray-100" />
                <h3 className="text-sm uppercase tracking-[0.3em] font-black text-blue-600">Các Thành Viên</h3>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
            </div>

            <div className="grid gap-6">
              {NHA_PHUONG_LAM_CONTACTS.length > 0 ? NHA_PHUONG_LAM_CONTACTS.map((contact: any) => (
                <div 
                  key={contact.id}
                  id={contact.id}
                  className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all group overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-100/50 transition-colors" />
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-300 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                          <User size={28} />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">{contact.role}</div>
                          <div className="text-2xl font-black text-gray-900 tracking-tight">{contact.name}</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 border-t border-gray-50 pt-4 md:border-none md:pt-0">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Phone size={16} />
                          </div>
                          <span className="font-bold">{contact.phone}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Mail size={16} />
                          </div>
                          <span className="font-bold">{contact.email || "Chưa cập nhật"}</span>
                        </div>
                      </div>
                    </div>
                    {contact.birthDate && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-50">
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Ngày sinh</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.birthDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Vào Nhà Tập</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.novitiateDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Khấn trọn</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.vowsDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Chịu chức</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.ordinationDate || "—"}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )) : (
                <div className="bg-gray-50 border border-gray-200 rounded-3xl p-12 text-center border-dashed">
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                    <User size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Đang cập nhật thành viên</h3>
                  <p className="text-gray-500 max-w-sm mx-auto">Thông tin chi tiết về các thành viên tại Nhà Phương Lâm sẽ sớm được bổ sung vào hệ thống.</p>
                </div>
              )}
            </div>
          </div>
        ) : currentPage === 6 ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button 
              onClick={() => goToPage(1)}
              className="flex items-center gap-2 text-blue-600 font-bold mb-8 hover:translate-x-[-4px] transition-transform"
            >
              <ArrowLeft size={20} />
              <span>Quay lại trang chủ</span>
            </button>
            <div className="mb-12">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full mb-4">
                Danh mục chi tiết
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-gray-900 italic">
                Nhà Túc Trưng
              </h2>
              <div className="h-1 w-20 bg-blue-600 rounded-full mb-8" />

              {/* Intro Section */}
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 mb-12 shadow-sm">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Thành Lập</div>
                      <div className="font-bold text-gray-900">Năm 1995</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Địa chỉ</div>
                      <div className="font-bold text-gray-900 leading-tight">20/1 KDC1, Ấp Đồng Xoài, Túc Trưng, Định Quán, Đồng Nai</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Bổn Mạng</div>
                      <div className="font-bold text-gray-900">Thánh Phaolô Tông Đồ Trở Lại</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gray-100" />
                <h3 className="text-sm uppercase tracking-[0.3em] font-black text-blue-600">Các Thành Viên</h3>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
            </div>

            <div className="grid gap-6">
              {NHA_TUC_TRUNG_CONTACTS.length > 0 ? NHA_TUC_TRUNG_CONTACTS.map((contact: any) => (
                <div 
                  key={contact.id}
                  id={contact.id}
                  className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all group overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-100/50 transition-colors" />
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-300 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                          <User size={28} />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">{contact.role}</div>
                          <div className="text-2xl font-black text-gray-900 tracking-tight">{contact.name}</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 border-t border-gray-50 pt-4 md:border-none md:pt-0">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Phone size={16} />
                          </div>
                          <span className="font-bold">{contact.phone}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Mail size={16} />
                          </div>
                          <span className="font-bold">{contact.email || "Chưa cập nhật"}</span>
                        </div>
                      </div>
                    </div>
                    {contact.birthDate && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-50">
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Ngày sinh</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.birthDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Vào Nhà Tập</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.novitiateDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Khấn trọn</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.vowsDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Chịu chức</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.ordinationDate || "—"}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )) : (
                <div className="bg-gray-50 border border-gray-200 rounded-3xl p-12 text-center border-dashed">
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                    <User size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Đang cập nhật thành viên</h3>
                  <p className="text-gray-500 max-w-sm mx-auto">Thông tin chi tiết về các thành viên tại Nhà Túc Trưng sẽ sớm được bổ sung vào hệ thống.</p>
                </div>
              )}
            </div>
          </div>
        ) : currentPage === 7 ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button 
              onClick={() => goToPage(1)}
              className="flex items-center gap-2 text-blue-600 font-bold mb-8 hover:translate-x-[-4px] transition-transform"
            >
              <ArrowLeft size={20} />
              <span>Quay lại trang chủ</span>
            </button>
            <div className="mb-12">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full mb-4">
                Danh mục chi tiết
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-gray-900 italic">
                Nhà Nguyễn Kiệm
              </h2>
              <div className="h-1 w-20 bg-blue-600 rounded-full mb-8" />

              {/* Intro Section */}
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 mb-12 shadow-sm">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Thành Lập</div>
                      <div className="font-bold text-gray-900">Năm 2002</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Địa chỉ</div>
                      <div className="font-bold text-gray-900 leading-tight">479/15 Nguyễn Kiệm, phường 9, Quận Phú Nhuận, Tp. HCM</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Bổn Mạng</div>
                      <div className="font-bold text-gray-900">Thánh Gioan Gabriel Perboyre</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gray-100" />
                <h3 className="text-sm uppercase tracking-[0.3em] font-black text-blue-600">Các Thành Viên</h3>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
            </div>

            <div className="grid gap-6">
              {NHA_NGUYEN_KIEM_CONTACTS.length > 0 ? NHA_NGUYEN_KIEM_CONTACTS.map((contact: any) => (
                <div 
                  key={contact.id}
                  id={contact.id}
                  className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all group overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-100/50 transition-colors" />
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-300 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                          <User size={28} />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">{contact.role}</div>
                          <div className="text-2xl font-black text-gray-900 tracking-tight">{contact.name}</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 border-t border-gray-50 pt-4 md:border-none md:pt-0">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Phone size={16} />
                          </div>
                          <span className="font-bold">{contact.phone}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Mail size={16} />
                          </div>
                          <span className="font-bold">{contact.email || "Chưa cập nhật"}</span>
                        </div>
                      </div>
                    </div>
                    {contact.birthDate && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-50">
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Ngày sinh</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.birthDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Vào Nhà Tập</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.novitiateDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Khấn trọn</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.vowsDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Chịu chức</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.ordinationDate || "—"}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )) : (
                <div className="bg-gray-50 border border-gray-200 rounded-3xl p-12 text-center border-dashed">
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                    <User size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Đang cập nhật thành viên</h3>
                  <p className="text-gray-500 max-w-sm mx-auto">Thông tin chi tiết về các thành viên tại Nhà Nguyễn Kiệm sẽ sớm được bổ sung vào hệ thống.</p>
                </div>
              )}
            </div>
          </div>
        ) : currentPage === 8 ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button 
              onClick={() => goToPage(1)}
              className="flex items-center gap-2 text-blue-600 font-bold mb-8 hover:translate-x-[-4px] transition-transform"
            >
              <ArrowLeft size={20} />
              <span>Quay lại trang chủ</span>
            </button>
            <div className="mb-12">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full mb-4">
                Danh mục chi tiết
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-gray-900 italic">
                Nhà Bình Chánh
              </h2>
              <div className="h-1 w-20 bg-blue-600 rounded-full mb-8" />

              {/* Intro Section */}
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 mb-12 shadow-sm">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Thành Lập</div>
                      <div className="font-bold text-gray-900">Năm 2021</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Địa chỉ</div>
                      <div className="font-bold text-gray-900 leading-tight">E13/13N Phạm Văn Sáng, Vĩnh Lộc A, Bình Chánh, Tp. HCM</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Bổn Mạng</div>
                      <div className="font-bold text-gray-900">Đức Mẹ Ban Ơn</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gray-100" />
                <h3 className="text-sm uppercase tracking-[0.3em] font-black text-blue-600">Các Thành Viên</h3>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
            </div>

            <div className="grid gap-6">
              {NHA_BINH_CHANH_CONTACTS.length > 0 ? NHA_BINH_CHANH_CONTACTS.map((contact: any) => (
                <div 
                  key={contact.id}
                  id={contact.id}
                  className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all group overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-100/50 transition-colors" />
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-300 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                          <User size={28} />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">{contact.role}</div>
                          <div className="text-2xl font-black text-gray-900 tracking-tight">{contact.name}</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 border-t border-gray-50 pt-4 md:border-none md:pt-0">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Phone size={16} />
                          </div>
                          <span className="font-bold">{contact.phone || "Để trống"}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Mail size={16} />
                          </div>
                          <span className="font-bold">{contact.email || "Chưa cập nhật"}</span>
                        </div>
                      </div>
                    </div>
                    {contact.birthDate && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-50">
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Ngày sinh</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.birthDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Vào Nhà Tập</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.novitiateDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Khấn trọn</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.vowsDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Chịu chức</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.ordinationDate || "—"}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )) : (
                <div className="bg-gray-50 border border-gray-200 rounded-3xl p-12 text-center border-dashed">
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                    <User size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Đang cập nhật thành viên</h3>
                  <p className="text-gray-500 max-w-sm mx-auto">Thông tin chi tiết về các thành viên tại Nhà Bình Chánh sẽ sớm được bổ sung vào hệ thống.</p>
                </div>
              )}
            </div>
          </div>
        ) : currentPage === 9 ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button 
              onClick={() => goToPage(1)}
              className="flex items-center gap-2 text-blue-600 font-bold mb-8 hover:translate-x-[-4px] transition-transform"
            >
              <ArrowLeft size={20} />
              <span>Quay lại trang chủ</span>
            </button>
            <div className="mb-12">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full mb-4">
                Danh mục chi tiết
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-gray-900 italic">
                Nhà Nha Trang
              </h2>
              <div className="h-1 w-20 bg-blue-600 rounded-full mb-8" />

              {/* Intro Section */}
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 mb-12 shadow-sm">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Thành Lập</div>
                      <div className="font-bold text-gray-900">Năm 2015</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Địa chỉ</div>
                      <div className="font-bold text-gray-900 leading-tight">54 Bắc Sơn, P. Vĩnh Hải, Tp. Nha Trang, Khánh Hòa</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Bổn Mạng</div>
                      <div className="font-bold text-gray-900">Thánh Mátta</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gray-100" />
                <h3 className="text-sm uppercase tracking-[0.3em] font-black text-blue-600">Các Thành Viên</h3>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
            </div>

            <div className="grid gap-6">
              {NHA_NHA_TRANG_CONTACTS.length > 0 ? NHA_NHA_TRANG_CONTACTS.map((contact: any) => (
                <div 
                  key={contact.id}
                  id={contact.id}
                  className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all group overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-100/50 transition-colors" />
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-300 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                          <User size={28} />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">{contact.role}</div>
                          <div className="text-2xl font-black text-gray-900 tracking-tight">{contact.name}</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 border-t border-gray-50 pt-4 md:border-none md:pt-0">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Phone size={16} />
                          </div>
                          <span className="font-bold">{contact.phone || "Để trống"}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Mail size={16} />
                          </div>
                          <span className="font-bold">{contact.email || "Chưa cập nhật"}</span>
                        </div>
                      </div>
                    </div>
                    {contact.birthDate && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-50">
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Ngày sinh</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.birthDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Vào Nhà Tập</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.novitiateDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Khấn trọn</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.vowsDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Chịu chức</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.ordinationDate || "—"}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )) : (
                <div className="bg-gray-50 border border-gray-200 rounded-3xl p-12 text-center border-dashed">
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                    <User size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Đang cập nhật thành viên</h3>
                  <p className="text-gray-500 max-w-sm mx-auto">Thông tin chi tiết về các thành viên tại Nhà Nha Trang sẽ sớm được bổ sung vào hệ thống.</p>
                </div>
              )}
            </div>
          </div>
        ) : currentPage === 10 ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button 
              onClick={() => goToPage(1)}
              className="flex items-center gap-2 text-blue-600 font-bold mb-8 hover:translate-x-[-4px] transition-transform"
            >
              <ArrowLeft size={20} />
              <span>Quay lại trang chủ</span>
            </button>
            <div className="mb-12">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full mb-4">
                Danh mục chi tiết
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-gray-900 italic">
                Nhà Bưng Kè
              </h2>
              <div className="h-1 w-20 bg-blue-600 rounded-full mb-8" />

              {/* Intro Section */}
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 mb-12 shadow-sm">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Thành Lập</div>
                      <div className="font-bold text-gray-900">Năm 2015</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Địa chỉ</div>
                      <div className="font-bold text-gray-900 leading-tight">180 Tổ 7, Ấp Phú Lộc, xã Hòa Hiệp, huyện Xuyên Mộc, BR–VT</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Bổn Mạng</div>
                      <div className="font-bold text-gray-900">Thánh Justin de Jacobis</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gray-100" />
                <h3 className="text-sm uppercase tracking-[0.3em] font-black text-blue-600">Các Thành Viên</h3>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
            </div>

            <div className="grid gap-6">
              {NHA_BUNG_KE_CONTACTS.length > 0 ? NHA_BUNG_KE_CONTACTS.map((contact: any) => (
                <div 
                  key={contact.id}
                  id={contact.id}
                  className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all group overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-100/50 transition-colors" />
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-300 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                          <User size={28} />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">{contact.role}</div>
                          <div className="text-2xl font-black text-gray-900 tracking-tight">{contact.name}</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 border-t border-gray-50 pt-4 md:border-none md:pt-0">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Phone size={16} />
                          </div>
                          <span className="font-bold">{contact.phone || "Để trống"}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Mail size={16} />
                          </div>
                          <span className="font-bold">{contact.email || "Chưa cập nhật"}</span>
                        </div>
                      </div>
                    </div>
                    {contact.birthDate && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-50">
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Ngày sinh</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.birthDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Vào Nhà Tập</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.novitiateDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Khấn trọn</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.vowsDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Chịu chức</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.ordinationDate || "—"}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )) : (
                <div className="bg-gray-50 border border-gray-200 rounded-3xl p-12 text-center border-dashed">
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                    <User size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Đang cập nhật thành viên</h3>
                  <p className="text-gray-500 max-w-sm mx-auto">Thông tin chi tiết về các thành viên tại Nhà Bưng Kè sẽ sớm được bổ sung vào hệ thống.</p>
                </div>
              )}
            </div>
          </div>
        ) : currentPage === 11 ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button 
              onClick={() => goToPage(1)}
              className="flex items-center gap-2 text-blue-600 font-bold mb-8 hover:translate-x-[-4px] transition-transform"
            >
              <ArrowLeft size={20} />
              <span>Quay lại trang chủ</span>
            </button>
            <div className="mb-12">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full mb-4">
                Danh mục chi tiết
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-gray-900 italic">
                Nhà Đắk Song
              </h2>
              <div className="h-1 w-20 bg-blue-600 rounded-full mb-8" />

              {/* Intro Section */}
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 mb-12 shadow-sm">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Thành Lập</div>
                      <div className="font-bold text-gray-900">Năm 2015</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Địa chỉ</div>
                      <div className="font-bold text-gray-900 leading-tight">107 Xã Nam Bình, huyện Đăk Song, Tỉnh Đắk Nông</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Bổn Mạng</div>
                      <div className="font-bold text-gray-900">Thánh François-Régis Clet</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gray-100" />
                <h3 className="text-sm uppercase tracking-[0.3em] font-black text-blue-600">Các Thành Viên</h3>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
            </div>

            <div className="grid gap-6">
              {NHA_DAK_SONG_CONTACTS.length > 0 ? NHA_DAK_SONG_CONTACTS.map((contact: any) => (
                <div 
                  key={contact.id}
                  id={contact.id}
                  className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all group overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-100/50 transition-colors" />
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-300 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                          <User size={28} />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">{contact.role}</div>
                          <div className="text-2xl font-black text-gray-900 tracking-tight">{contact.name}</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 border-t border-gray-50 pt-4 md:border-none md:pt-0">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Phone size={16} />
                          </div>
                          <span className="font-bold">{contact.phone || "Để trống"}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Mail size={16} />
                          </div>
                          <span className="font-bold">{contact.email || "Chưa cập nhật"}</span>
                        </div>
                      </div>
                    </div>
                    {contact.birthDate && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-50">
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Ngày sinh</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.birthDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Vào Nhà Tập</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.novitiateDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Khấn trọn</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.vowsDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Chịu chức</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.ordinationDate || "—"}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )) : (
                <div className="bg-gray-50 border border-gray-200 rounded-3xl p-12 text-center border-dashed">
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                    <User size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Đang cập nhật thành viên</h3>
                  <p className="text-gray-500 max-w-sm mx-auto">Thông tin chi tiết về các thành viên tại Nhà Đắk Song sẽ sớm được bổ sung vào hệ thống.</p>
                </div>
              )}
            </div>
          </div>
        ) : currentPage === 12 ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button 
              onClick={() => goToPage(1)}
              className="flex items-center gap-2 text-blue-600 font-bold mb-8 hover:translate-x-[-4px] transition-transform"
            >
              <ArrowLeft size={20} />
              <span>Quay lại trang chủ</span>
            </button>
            <div className="mb-12">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full mb-4">
                Danh mục chi tiết
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-gray-900 italic">
                Nhà Xuân Hoà
              </h2>
              <div className="h-1 w-20 bg-blue-600 rounded-full mb-8" />

              {/* Intro Section */}
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 mb-12 shadow-sm">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Thành Lập</div>
                      <div className="font-bold text-gray-900">Năm 2010, 2015</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Địa chỉ</div>
                      <div className="font-bold text-gray-900 leading-tight">232 Thôn Hòa Phong, Đắk Sắc, Đắk Mil, Tỉnh Đắk Nông</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Bổn Mạng</div>
                      <div className="font-bold text-gray-900">Đức Maria Vô Nhiễm Nguyên Tội</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gray-100" />
                <h3 className="text-sm uppercase tracking-[0.3em] font-black text-blue-600">Các Thành Viên</h3>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
            </div>

            <div className="grid gap-6">
              {NHA_XUAN_HOA_CONTACTS.length > 0 ? NHA_XUAN_HOA_CONTACTS.map((contact: any) => (
                <div 
                  key={contact.id}
                  id={contact.id}
                  className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all group overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-100/50 transition-colors" />
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-300 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                          <User size={28} />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">{contact.role}</div>
                          <div className="text-2xl font-black text-gray-900 tracking-tight">{contact.name}</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 border-t border-gray-50 pt-4 md:border-none md:pt-0">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Phone size={16} />
                          </div>
                          <span className="font-bold">{contact.phone || "Để trống"}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Mail size={16} />
                          </div>
                          <span className="font-bold">{contact.email || "Chưa cập nhật"}</span>
                        </div>
                      </div>
                    </div>
                    {contact.birthDate && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-50">
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Ngày sinh</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.birthDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Vào Nhà Tập</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.novitiateDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Khấn trọn</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.vowsDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Chịu chức</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.ordinationDate || "—"}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )) : (
                <div className="bg-gray-50 border border-gray-200 rounded-3xl p-12 text-center border-dashed">
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                    <User size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Đang cập nhật thành viên</h3>
                  <p className="text-gray-500 max-w-sm mx-auto">Thông tin chi tiết về các thành viên tại Nhà Xuân Hoà sẽ sớm được bổ sung vào hệ thống.</p>
                </div>
              )}
            </div>
          </div>
        ) : currentPage === 13 ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button 
              onClick={() => goToPage(1)}
              className="flex items-center gap-2 text-blue-600 font-bold mb-8 hover:translate-x-[-4px] transition-transform"
            >
              <ArrowLeft size={20} />
              <span>Quay lại trang chủ</span>
            </button>
            <div className="mb-12">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full mb-4">
                Danh mục chi tiết
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-gray-900 italic">
                Nhà Kon Xơm Lũh
              </h2>
              <div className="h-1 w-20 bg-blue-600 rounded-full mb-8" />

              {/* Intro Section */}
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 mb-12 shadow-sm">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Thành Lập</div>
                      <div className="font-bold text-gray-900">Năm 2015</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Địa chỉ</div>
                      <div className="font-bold text-gray-900 leading-tight">Thôn 7, Xã Đăktơre, Huyện Kon Rẫy, Tỉnh Kon Tum.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Bổn Mạng</div>
                      <div className="font-bold text-gray-900">Thánh Phanxicô Xaviê</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gray-100" />
                <h3 className="text-sm uppercase tracking-[0.3em] font-black text-blue-600">Các Thành Viên</h3>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
            </div>

            <div className="grid gap-6">
              {NHA_KON_XOM_LUH_CONTACTS.length > 0 ? NHA_KON_XOM_LUH_CONTACTS.map((contact: any) => (
                <div 
                  key={contact.id}
                  id={contact.id}
                  className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all group overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-100/50 transition-colors" />
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-300 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                          <User size={28} />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">{contact.role}</div>
                          <div className="text-2xl font-black text-gray-900 tracking-tight">{contact.name}</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 border-t border-gray-50 pt-4 md:border-none md:pt-0">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Phone size={16} />
                          </div>
                          <span className="font-bold">{contact.phone || "Để trống"}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Mail size={16} />
                          </div>
                          <span className="font-bold">{contact.email || "Chưa cập nhật"}</span>
                        </div>
                      </div>
                    </div>
                    {contact.birthDate && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-50">
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Ngày sinh</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.birthDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Vào Nhà Tập</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.novitiateDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Khấn trọn</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.vowsDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Chịu chức</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.ordinationDate || "—"}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )) : (
                <div className="bg-gray-50 border border-gray-200 rounded-3xl p-12 text-center border-dashed">
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                    <User size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Đang cập nhật thành viên</h3>
                  <p className="text-gray-500 max-w-sm mx-auto">Thông tin chi tiết về các thành viên tại Nhà Kon Xơm Lũh sẽ sớm được bổ sung vào hệ thống.</p>
                </div>
              )}
            </div>
          </div>
        ) : currentPage === 14 ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button 
              onClick={() => goToPage(1)}
              className="flex items-center gap-2 text-blue-600 font-bold mb-8 hover:translate-x-[-4px] transition-transform"
            >
              <ArrowLeft size={20} />
              <span>Quay lại trang chủ</span>
            </button>
            <div className="mb-12">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full mb-4">
                Danh mục chi tiết
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-gray-900 italic">
                Nhà Tân Lập
              </h2>
              <div className="h-1 w-20 bg-blue-600 rounded-full mb-8" />

              {/* Intro Section */}
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 mb-12 shadow-sm">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Thành Lập</div>
                      <div className="font-bold text-gray-900">Năm 2015</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Địa chỉ</div>
                      <div className="font-bold text-gray-900 leading-tight">Thôn 3, xã Tân Lập, huyện Kon Rẫy, Kon Tum.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Bổn Mạng</div>
                      <div className="font-bold text-gray-900">Chân phước Frédéric Antoine Ozanam</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gray-100" />
                <h3 className="text-sm uppercase tracking-[0.3em] font-black text-blue-600">Các Thành Viên</h3>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
            </div>

            <div className="grid gap-6">
              {NHA_TAN_LAP_CONTACTS.length > 0 ? NHA_TAN_LAP_CONTACTS.map((contact: any) => (
                <div 
                  key={contact.id}
                  id={contact.id}
                  className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all group overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-100/50 transition-colors" />
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-300 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                          <User size={28} />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">{contact.role}</div>
                          <div className="text-2xl font-black text-gray-900 tracking-tight">{contact.name}</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 border-t border-gray-50 pt-4 md:border-none md:pt-0">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Phone size={16} />
                          </div>
                          <span className="font-bold">{contact.phone || "Để trống"}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Mail size={16} />
                          </div>
                          <span className="font-bold">{contact.email || "Chưa cập nhật"}</span>
                        </div>
                      </div>
                    </div>
                    {contact.birthDate && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-50">
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Ngày sinh</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.birthDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Vào Nhà Tập</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.novitiateDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Khấn trọn</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.vowsDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Chịu chức</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.ordinationDate || "—"}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )) : (
                <div className="bg-gray-50 border border-gray-200 rounded-3xl p-12 text-center border-dashed">
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                    <User size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Đang cập nhật thành viên</h3>
                  <p className="text-gray-500 max-w-sm mx-auto">Thông tin chi tiết về các thành viên tại Nhà Tân Lập sẽ sớm được bổ sung vào hệ thống.</p>
                </div>
              )}
            </div>
          </div>
        ) : currentPage === 15 ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button 
              onClick={() => goToPage(1)}
              className="flex items-center gap-2 text-blue-600 font-bold mb-8 hover:translate-x-[-4px] transition-transform"
            >
              <ArrowLeft size={20} />
              <span>Quay lại trang chủ</span>
            </button>
            <div className="mb-12">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full mb-4">
                Danh mục chi tiết
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-gray-900 italic">
                Nhà Măng Đen
              </h2>
              <div className="h-1 w-20 bg-blue-600 rounded-full mb-8" />

              {/* Intro Section */}
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 mb-12 shadow-sm">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Thành Lập</div>
                      <div className="font-bold text-gray-900">Năm 2025</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Địa chỉ</div>
                      <div className="font-bold text-gray-900 leading-tight">Thị trấn Măng Đen, huyện Konplong, Tỉnh Kon Tum.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Bổn Mạng</div>
                      <div className="font-bold text-gray-900">Đức Mẹ Ban Ơn</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gray-100" />
                <h3 className="text-sm uppercase tracking-[0.3em] font-black text-blue-600">Các Thành Viên</h3>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
            </div>

            <div className="grid gap-6">
              {NHA_MANG_DEN_CONTACTS.length > 0 ? NHA_MANG_DEN_CONTACTS.map((contact: any) => (
                <div 
                  key={contact.id}
                  id={contact.id}
                  className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all group overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-100/50 transition-colors" />
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-300 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                          <User size={28} />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">{contact.role}</div>
                          <div className="text-2xl font-black text-gray-900 tracking-tight">{contact.name}</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 border-t border-gray-50 pt-4 md:border-none md:pt-0">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Phone size={16} />
                          </div>
                          <span className="font-bold">{contact.phone || "Để trống"}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Mail size={16} />
                          </div>
                          <span className="font-bold">{contact.email || "Chưa cập nhật"}</span>
                        </div>
                      </div>
                    </div>
                    {contact.birthDate && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-50">
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Ngày sinh</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.birthDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Vào Nhà Tập</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.novitiateDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Khấn trọn</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.vowsDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Chịu chức</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.ordinationDate || "—"}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )) : (
                <div className="bg-gray-50 border border-gray-200 rounded-3xl p-12 text-center border-dashed">
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                    <User size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Đang cập nhật thành viên</h3>
                  <p className="text-gray-500 max-w-sm mx-auto">Thông tin chi tiết về các thành viên tại Nhà Măng Đen sẽ sớm được bổ sung vào hệ thống.</p>
                </div>
              )}
            </div>
          </div>
        ) : currentPage === 16 ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button 
              onClick={() => goToPage(1)}
              className="flex items-center gap-2 text-blue-600 font-bold mb-8 hover:translate-x-[-4px] transition-transform"
            >
              <ArrowLeft size={20} />
              <span>Quay lại trang chủ</span>
            </button>
            <div className="mb-12">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full mb-4">
                Danh mục chi tiết
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-gray-900 italic">
                Nhà Làng Nam
              </h2>
              <div className="h-1 w-20 bg-blue-600 rounded-full mb-8" />

              {/* Intro Section */}
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 mb-12 shadow-sm">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Thành Lập</div>
                      <div className="font-bold text-gray-900">Năm 2015, 2021</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Địa chỉ</div>
                      <div className="font-bold text-gray-900 leading-tight">Xóm 20, Xã Nghi Trung, huyện Nghi Lộc, Tỉnh Nghệ An.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Bổn Mạng</div>
                      <div className="font-bold text-gray-900">Chân phước Ghebre Michael</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gray-100" />
                <h3 className="text-sm uppercase tracking-[0.3em] font-black text-blue-600">Các Thành Viên</h3>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
            </div>

            <div className="grid gap-6">
              {NHA_LANG_NAM_CONTACTS.length > 0 ? NHA_LANG_NAM_CONTACTS.map((contact: any) => (
                <div 
                  key={contact.id}
                  id={contact.id}
                  className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all group overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-100/50 transition-colors" />
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-300 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                          <User size={28} />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">{contact.role}</div>
                          <div className="text-2xl font-black text-gray-900 tracking-tight">{contact.name}</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 border-t border-gray-50 pt-4 md:border-none md:pt-0">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Phone size={16} />
                          </div>
                          <span className="font-bold">{contact.phone || "Để trống"}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Mail size={16} />
                          </div>
                          <span className="font-bold">{contact.email || "Chưa cập nhật"}</span>
                        </div>
                      </div>
                    </div>
                    {contact.birthDate && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-50">
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Ngày sinh</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.birthDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Vào Nhà Tập</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.novitiateDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Khấn trọn</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.vowsDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Chịu chức</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.ordinationDate || "—"}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )) : (
                <div className="bg-gray-50 border border-gray-200 rounded-3xl p-12 text-center border-dashed">
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                    <User size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Đang cập nhật thành viên</h3>
                  <p className="text-gray-500 max-w-sm mx-auto">Thông tin chi tiết về các thành viên tại Nhà Làng Nam sẽ sớm được bổ sung vào hệ thống.</p>
                </div>
              )}
            </div>
          </div>
        ) : currentPage === 17 ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button 
              onClick={() => goToPage(1)}
              className="flex items-center gap-2 text-blue-600 font-bold mb-8 hover:translate-x-[-4px] transition-transform"
            >
              <ArrowLeft size={20} />
              <span>Quay lại trang chủ</span>
            </button>
            <div className="mb-12">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full mb-4">
                Danh mục chi tiết
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-gray-900 italic">
                Cộng Đoàn Khánh Sơn
              </h2>
              <div className="h-1 w-20 bg-blue-600 rounded-full mb-8" />

              {/* Intro Section */}
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 mb-12 shadow-sm">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Thành Lập</div>
                      <div className="font-bold text-gray-900">Năm 2013</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Địa chỉ</div>
                      <div className="font-bold text-gray-900 leading-tight">Xã Sơn Trung, huyện Khánh Sơn, Khánh Hòa.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Bổn Mạng</div>
                      <div className="font-bold text-gray-900">Thánh Louise de Marillac</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gray-100" />
                <h3 className="text-sm uppercase tracking-[0.3em] font-black text-blue-600">Các Thành Viên</h3>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
            </div>

            <div className="grid gap-6">
              {CONG_DOAN_KHANH_SON_CONTACTS.length > 0 ? CONG_DOAN_KHANH_SON_CONTACTS.map((contact: any) => (
                <div 
                  key={contact.id}
                  id={contact.id}
                  className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all group overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-100/50 transition-colors" />
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-300 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                          <User size={28} />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">{contact.role}</div>
                          <div className="text-2xl font-black text-gray-900 tracking-tight">{contact.name}</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 border-t border-gray-50 pt-4 md:border-none md:pt-0">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Phone size={16} />
                          </div>
                          <span className="font-bold">{contact.phone || "Để trống"}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Mail size={16} />
                          </div>
                          <span className="font-bold">{contact.email || "Chưa cập nhật"}</span>
                        </div>
                      </div>
                    </div>
                    {contact.birthDate && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-50">
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Ngày sinh</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.birthDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Vào Nhà Tập</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.novitiateDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Khấn trọn</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.vowsDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Chịu chức</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.ordinationDate || "—"}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )) : (
                <div className="bg-gray-50 border border-gray-200 rounded-3xl p-12 text-center border-dashed">
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                    <User size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Đang cập nhật thành viên</h3>
                  <p className="text-gray-500 max-w-sm mx-auto">Thông tin chi tiết về các thành viên tại Cộng Đoàn Khánh Sơn sẽ sớm được bổ sung vào hệ thống.</p>
                </div>
              )}
            </div>
          </div>
        ) : currentPage === 18 ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button 
              onClick={() => goToPage(1)}
              className="flex items-center gap-2 text-blue-600 font-bold mb-8 hover:translate-x-[-4px] transition-transform"
            >
              <ArrowLeft size={20} />
              <span>Quay lại trang chủ</span>
            </button>
            <div className="mb-12">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full mb-4">
                Danh mục chi tiết
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-gray-900 italic">
                Cộng Đoàn Cần Thơ
              </h2>
              <div className="h-1 w-20 bg-blue-600 rounded-full mb-8" />

              {/* Intro Section */}
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 mb-12 shadow-sm">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Thành Lập</div>
                      <div className="font-bold text-gray-900">Năm 2019</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Địa chỉ</div>
                      <div className="font-bold text-gray-900 leading-tight">115/46/12 CMT 8, P. An Thới, Q. Bình Thuỷ, Tp. Cần Thơ</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Bổn Mạng</div>
                      <div className="font-bold text-gray-900">Để trống</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gray-100" />
                <h3 className="text-sm uppercase tracking-[0.3em] font-black text-blue-600">Các Thành Viên</h3>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
            </div>

            <div className="grid gap-6">
              {CONG_DOAN_CAN_THO_CONTACTS.length > 0 ? CONG_DOAN_CAN_THO_CONTACTS.map((contact: any) => (
                <div 
                  key={contact.id}
                  id={contact.id}
                  className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all group overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-100/50 transition-colors" />
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-300 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                          <User size={28} />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">{contact.role}</div>
                          <div className="text-2xl font-black text-gray-900 tracking-tight">{contact.name}</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 border-t border-gray-50 pt-4 md:border-none md:pt-0">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Phone size={16} />
                          </div>
                          <span className="font-bold">{contact.phone || "Để trống"}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Mail size={16} />
                          </div>
                          <span className="font-bold">{contact.email || "Chưa cập nhật"}</span>
                        </div>
                      </div>
                    </div>
                    {contact.birthDate && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-50">
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Ngày sinh</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.birthDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Vào Nhà Tập</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.novitiateDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Khấn trọn</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.vowsDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Chịu chức</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.ordinationDate || "—"}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )) : (
                <div className="bg-gray-50 border border-gray-200 rounded-3xl p-12 text-center border-dashed">
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                    <User size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Đang cập nhật thành viên</h3>
                  <p className="text-gray-500 max-w-sm mx-auto">Thông tin chi tiết về các thành viên tại Cộng Đoàn Cần Thơ sẽ sớm được bổ sung vào hệ thống.</p>
                </div>
              )}
            </div>
          </div>
        ) : currentPage === 19 ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button 
              onClick={() => goToPage(1)}
              className="flex items-center gap-2 text-blue-600 font-bold mb-8 hover:translate-x-[-4px] transition-transform"
            >
              <ArrowLeft size={20} />
              <span>Quay lại trang chủ</span>
            </button>
            <div className="mb-12">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full mb-4">
                Danh mục chi tiết
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-gray-900 italic">
                Cộng Đoàn Hướng Phương
              </h2>
              <div className="h-1 w-20 bg-blue-600 rounded-full mb-8" />

              {/* Intro Section */}
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 mb-12 shadow-sm">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Thành Lập</div>
                      <div className="font-bold text-gray-900">Năm 2025</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Địa chỉ</div>
                      <div className="font-bold text-gray-900 leading-tight">Thôn Tô Xá, xã Quảng Phương, huyện Quảng Trạch, Quảng Bình</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Bổn Mạng</div>
                      <div className="font-bold text-gray-900">Thánh Antôn Padova</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gray-100" />
                <h3 className="text-sm uppercase tracking-[0.3em] font-black text-blue-600">Các Thành Viên</h3>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
            </div>

            <div className="grid gap-6">
              {CONG_DOAN_HUONG_PHUONG_CONTACTS.length > 0 ? CONG_DOAN_HUONG_PHUONG_CONTACTS.map((contact: any) => (
                <div 
                  key={contact.id}
                  id={contact.id}
                  className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all group overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-100/50 transition-colors" />
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-300 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                          <User size={28} />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">{contact.role}</div>
                          <div className="text-2xl font-black text-gray-900 tracking-tight">{contact.name}</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 border-t border-gray-50 pt-4 md:border-none md:pt-0">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Phone size={16} />
                          </div>
                          <span className="font-bold">{contact.phone || "Để trống"}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Mail size={16} />
                          </div>
                          <span className="font-bold">{contact.email || "Chưa cập nhật"}</span>
                        </div>
                      </div>
                    </div>
                    {contact.birthDate && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-50">
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Ngày sinh</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.birthDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Vào Nhà Tập</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.novitiateDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Khấn trọn</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.vowsDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Chịu chức</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.ordinationDate || "—"}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )) : (
                <div className="bg-gray-50 border border-gray-200 rounded-3xl p-12 text-center border-dashed">
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                    <User size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Đang cập nhật thành viên</h3>
                  <p className="text-gray-500 max-w-sm mx-auto">Thông tin chi tiết về các thành viên tại Cộng Đoàn Hướng Phương sẽ sớm được bổ sung vào hệ thống.</p>
                </div>
              )}
            </div>
          </div>
        ) : currentPage === 20 ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button 
              onClick={() => goToPage(1)}
              className="flex items-center gap-2 text-blue-600 font-bold mb-8 hover:translate-x-[-4px] transition-transform"
            >
              <ArrowLeft size={20} />
              <span>Quay lại trang chủ</span>
            </button>
            <div className="mb-12">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full mb-4">
                Danh mục chi tiết
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-gray-900 italic">
                Cộng Đoàn Bắc Tân Uyên
              </h2>
              <div className="h-1 w-20 bg-blue-600 rounded-full mb-8" />

              {/* Intro Section */}
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 mb-12 shadow-sm">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Thành Lập</div>
                      <div className="font-bold text-gray-900">Năm 2025</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Địa chỉ</div>
                      <div className="font-bold text-gray-900 leading-tight">DT 746 đường Tân Định 39, Ấp Cây Chanh, Xã Bắc Tân Uyên, Thành Phố Hồ Chí Minh.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Bổn Mạng</div>
                      <div className="font-bold text-gray-900">Để Trống</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gray-100" />
                <h3 className="text-sm uppercase tracking-[0.3em] font-black text-blue-600">Các Thành Viên</h3>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
            </div>

            <div className="grid gap-6">
              {CONG_DOAN_BAC_TAN_UYEN_CONTACTS.length > 0 ? CONG_DOAN_BAC_TAN_UYEN_CONTACTS.map((contact: any) => (
                <div 
                  key={contact.id}
                  id={contact.id}
                  className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all group overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-100/50 transition-colors" />
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-300 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                          <User size={28} />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">{contact.role}</div>
                          <div className="text-2xl font-black text-gray-900 tracking-tight">{contact.name}</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 border-t border-gray-50 pt-4 md:border-none md:pt-0">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Phone size={16} />
                          </div>
                          <span className="font-bold">{contact.phone || "Để trống"}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Mail size={16} />
                          </div>
                          <span className="font-bold">{contact.email || "Chưa cập nhật"}</span>
                        </div>
                      </div>
                    </div>
                    {contact.birthDate && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-50">
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Ngày sinh</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.birthDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Vào Nhà Tập</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.novitiateDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Khấn trọn</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.vowsDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Chịu chức</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.ordinationDate || "—"}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )) : (
                <div className="bg-gray-50 border border-gray-200 rounded-3xl p-12 text-center border-dashed">
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                    <User size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Đang cập nhật thành viên</h3>
                  <p className="text-gray-500 max-w-sm mx-auto">Thông tin chi tiết về các thành viên tại Cộng Đoàn Bắc Tân Uyên sẽ sớm được bổ sung vào hệ thống.</p>
                </div>
              )}
            </div>
          </div>
        ) : currentPage === 21 ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button 
              onClick={() => goToPage(1)}
              className="flex items-center gap-2 text-blue-600 font-bold mb-8 hover:translate-x-[-4px] transition-transform"
            >
              <ArrowLeft size={20} />
              <span>Quay lại trang chủ</span>
            </button>
            <div className="mb-12">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full mb-4">
                Danh mục chi tiết
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-gray-900 italic">
                Cộng Đoàn Chi Lăng
              </h2>
              <div className="h-1 w-20 bg-blue-600 rounded-full mb-8" />

              {/* Intro Section */}
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 mb-12 shadow-sm">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Thành Lập</div>
                      <div className="font-bold text-gray-900">Năm 2025</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Địa chỉ</div>
                      <div className="font-bold text-gray-900 leading-tight">Khóm 2, Thị trấn Chi Lăng, Huyện Tịnh Biên, An Giang</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Bổn Mạng</div>
                      <div className="font-bold text-gray-900">Thánh Vinh Sơn Phaolô</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gray-100" />
                <h3 className="text-sm uppercase tracking-[0.3em] font-black text-blue-600">Các Thành Viên</h3>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
            </div>

            <div className="grid gap-6">
              {CONG_DOAN_CHI_LANG_CONTACTS.length > 0 ? CONG_DOAN_CHI_LANG_CONTACTS.map((contact: any) => (
                <div 
                  key={contact.id}
                  id={contact.id}
                  className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all group overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-100/50 transition-colors" />
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-300 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                          <User size={28} />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">{contact.role}</div>
                          <div className="text-2xl font-black text-gray-900 tracking-tight">{contact.name}</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 border-t border-gray-50 pt-4 md:border-none md:pt-0">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Phone size={16} />
                          </div>
                          <span className="font-bold">{contact.phone || "Để trống"}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Mail size={16} />
                          </div>
                          <span className="font-bold">{contact.email || "Chưa cập nhật"}</span>
                        </div>
                      </div>
                    </div>
                    {contact.birthDate && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-50">
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Ngày sinh</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.birthDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Vào Nhà Tập</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.novitiateDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Khấn trọn</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.vowsDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Chịu chức</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.ordinationDate || "—"}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )) : (
                <div className="bg-gray-50 border border-gray-200 rounded-3xl p-12 text-center border-dashed">
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                    <User size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Đang cập nhật thành viên</h3>
                  <p className="text-gray-500 max-w-sm mx-auto">Thông tin chi tiết về các thành viên tại Cộng Đoàn Chi Lăng sẽ sớm được bổ sung vào hệ thống.</p>
                </div>
              )}
            </div>
          </div>
        ) : currentPage === 22 ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button 
              onClick={() => goToPage(1)}
              className="flex items-center gap-2 text-blue-600 font-bold mb-8 hover:translate-x-[-4px] transition-transform"
            >
              <ArrowLeft size={20} />
              <span>Quay lại trang chủ</span>
            </button>
            <div className="mb-12">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full mb-4">
                Danh mục chi tiết
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-gray-900 italic">
                Cộng Đoàn Hội Yên
              </h2>
              <div className="h-1 w-20 bg-blue-600 rounded-full mb-8" />

              {/* Intro Section */}
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 mb-12 shadow-sm">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Thành Lập</div>
                      <div className="font-bold text-gray-900">Năm 2025</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Địa chỉ</div>
                      <div className="font-bold text-gray-900 leading-tight">Xã Hòa Bắc, huyện Hòa Vang, thành phố Đà Nẵng</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Bổn Mạng</div>
                      <div className="font-bold text-gray-900">Thánh Gioan Baotixita</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gray-100" />
                <h3 className="text-sm uppercase tracking-[0.3em] font-black text-blue-600">Các Thành Viên</h3>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
            </div>

            <div className="grid gap-6">
              {CONG_DOAN_HOI_YEN_CONTACTS.length > 0 ? CONG_DOAN_HOI_YEN_CONTACTS.map((contact: any) => (
                <div 
                  key={contact.id}
                  id={contact.id}
                  className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all group overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-100/50 transition-colors" />
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-300 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                          <User size={28} />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">{contact.role}</div>
                          <div className="text-2xl font-black text-gray-900 tracking-tight">{contact.name}</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 border-t border-gray-50 pt-4 md:border-none md:pt-0">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Phone size={16} />
                          </div>
                          <span className="font-bold">{contact.phone || "Để trống"}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Mail size={16} />
                          </div>
                          <span className="font-bold">{contact.email || "Chưa cập nhật"}</span>
                        </div>
                      </div>
                    </div>
                    {contact.birthDate && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-50">
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Ngày sinh</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.birthDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Vào Nhà Tập</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.novitiateDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Khấn trọn</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.vowsDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Chịu chức</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.ordinationDate || "—"}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )) : (
                <div className="bg-gray-50 border border-gray-200 rounded-3xl p-12 text-center border-dashed">
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                    <User size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Đang cập nhật thành viên</h3>
                  <p className="text-gray-500 max-w-sm mx-auto">Thông tin chi tiết về các thành viên tại Cộng Đoàn Hội Yên sẽ sớm được bổ sung vào hệ thống.</p>
                </div>
              )}
            </div>
          </div>
        ) : currentPage === 23 ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button 
              onClick={() => goToPage(1)}
              className="flex items-center gap-2 text-blue-600 font-bold mb-8 hover:translate-x-[-4px] transition-transform"
            >
              <ArrowLeft size={20} />
              <span>Quay lại trang chủ</span>
            </button>
            <div className="mb-12">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full mb-4">
                Danh mục chi tiết
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-gray-900 italic">
                Cộng Đoàn Phong Lôi
              </h2>
              <div className="h-1 w-20 bg-blue-600 rounded-full mb-8" />

              {/* Intro Section */}
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 mb-12 shadow-sm">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Thành Lập</div>
                      <div className="font-bold text-gray-900">Năm 2019</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Địa chỉ</div>
                      <div className="font-bold text-gray-900 leading-tight">Chưa cập nhật</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Bổn Mạng</div>
                      <div className="font-bold text-gray-900">Chưa cập nhật</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gray-100" />
                <h3 className="text-sm uppercase tracking-[0.3em] font-black text-blue-600">Các Thành Viên</h3>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
            </div>

            <div className="grid gap-6">
              {CONG_DOAN_PHONG_LOI_CONTACTS.length > 0 ? CONG_DOAN_PHONG_LOI_CONTACTS.map((contact: any) => (
                <div 
                  key={contact.id}
                  id={contact.id}
                  className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all group overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-100/50 transition-colors" />
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-300 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                          <User size={28} />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">{contact.role}</div>
                          <div className="text-2xl font-black text-gray-900 tracking-tight">{contact.name}</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 border-t border-gray-50 pt-4 md:border-none md:pt-0">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Phone size={16} />
                          </div>
                          <span className="font-bold">{contact.phone || "Để trống"}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Mail size={16} />
                          </div>
                          <span className="font-bold">{contact.email || "Chưa cập nhật"}</span>
                        </div>
                      </div>
                    </div>
                    {contact.birthDate && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-50">
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Ngày sinh</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.birthDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Vào Nhà Tập</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.novitiateDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Khấn trọn</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.vowsDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Chịu chức</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.ordinationDate || "—"}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )) : (
                <div className="bg-gray-50 border border-gray-200 rounded-3xl p-12 text-center border-dashed">
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                    <User size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Đang cập nhật thành viên</h3>
                  <p className="text-gray-500 max-w-sm mx-auto">Thông tin chi tiết về các thành viên tại Cộng Đoàn Phong Lôi sẽ sớm được bổ sung vào hệ thống.</p>
                </div>
              )}
            </div>
          </div>
        ) : currentPage === 24 ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button 
              onClick={() => goToPage(1)}
              className="flex items-center gap-2 text-blue-600 font-bold mb-8 hover:translate-x-[-4px] transition-transform"
            >
              <ArrowLeft size={20} />
              <span>Quay lại trang chủ</span>
            </button>
            <div className="mb-12">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full mb-4">
                Danh mục chi tiết
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-gray-900 italic">
                Cộng Đoàn Phình Hồ
              </h2>
              <div className="h-1 w-20 bg-blue-600 rounded-full mb-8" />

              {/* Intro Section */}
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 mb-12 shadow-sm">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Thành Lập</div>
                      <div className="font-bold text-gray-900">Năm 2025</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Địa chỉ</div>
                      <div className="font-bold text-gray-900 leading-tight">Xã Phình Hồ, huyện Trạm Tấu, tỉnh Yên Bái</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Bổn Mạng</div>
                      <div className="font-bold text-gray-900">Têrêsa Hài Đồng Giêsu</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gray-100" />
                <h3 className="text-sm uppercase tracking-[0.3em] font-black text-blue-600">Các Thành Viên</h3>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
            </div>

            <div className="grid gap-6">
              {CONG_DOAN_PHINH_HO_CONTACTS.length > 0 ? CONG_DOAN_PHINH_HO_CONTACTS.map((contact: any) => (
                <div 
                  key={contact.id}
                  id={contact.id}
                  className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all group overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-100/50 transition-colors" />
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-300 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                          <User size={28} />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">{contact.role}</div>
                          <div className="text-2xl font-black text-gray-900 tracking-tight">{contact.name}</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 border-t border-gray-50 pt-4 md:border-none md:pt-0">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Phone size={16} />
                          </div>
                          <span className="font-bold">{contact.phone || "Để trống"}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Mail size={16} />
                          </div>
                          <span className="font-bold">{contact.email || "Chưa cập nhật"}</span>
                        </div>
                      </div>
                    </div>
                    {contact.birthDate && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-50">
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Ngày sinh</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.birthDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Vào Nhà Tập</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.novitiateDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Khấn trọn</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.vowsDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Chịu chức</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.ordinationDate || "—"}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )) : (
                <div className="bg-gray-50 border border-gray-200 rounded-3xl p-12 text-center border-dashed">
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                    <User size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Đang cập nhật thành viên</h3>
                  <p className="text-gray-500 max-w-sm mx-auto">Thông tin chi tiết về các thành viên tại Cộng Đoàn Phình Hồ sẽ sớm được bổ sung vào hệ thống.</p>
                </div>
              )}
            </div>
          </div>
        ) : currentPage === 25 ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button 
              onClick={() => goToPage(1)}
              className="flex items-center gap-2 text-blue-600 font-bold mb-8 hover:translate-x-[-4px] transition-transform"
            >
              <ArrowLeft size={20} />
              <span>Quay lại trang chủ</span>
            </button>
            <div className="mb-12">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full mb-4">
                Danh mục chi tiết
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-gray-900 italic">
                Hoa Kỳ
              </h2>
              <div className="h-1 w-20 bg-blue-600 rounded-full mb-8" />

              {/* Intro Section */}
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 mb-12 shadow-sm">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Thành Lập</div>
                      <div className="font-bold text-gray-900">Trống</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Địa chỉ</div>
                      <div className="font-bold text-gray-900 leading-tight">Trống</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Bổn Mạng</div>
                      <div className="font-bold text-gray-900">Trống</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gray-100" />
                <h3 className="text-sm uppercase tracking-[0.3em] font-black text-blue-600">Các Thành Viên</h3>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
            </div>

            <div className="grid gap-6">
              {CONG_DOAN_HOA_KY_CONTACTS.length > 0 ? CONG_DOAN_HOA_KY_CONTACTS.map((contact: any) => (
                <div 
                  key={contact.id}
                  id={contact.id}
                  className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all group overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-100/50 transition-colors" />
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-300 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                          <User size={28} />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">{contact.role}</div>
                          <div className="text-2xl font-black text-gray-900 tracking-tight">{contact.name}</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 border-t border-gray-50 pt-4 md:border-none md:pt-0">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Phone size={16} />
                          </div>
                          <span className="font-bold">{contact.phone || "Để trống"}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Mail size={16} />
                          </div>
                          <span className="font-bold">{contact.email || "Chưa cập nhật"}</span>
                        </div>
                      </div>
                    </div>
                    {contact.birthDate && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-50">
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Ngày sinh</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.birthDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Vào Nhà Tập</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.novitiateDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Khấn trọn</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.vowsDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Chịu chức</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.ordinationDate || "—"}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )) : (
                <div className="bg-gray-50 border border-gray-200 rounded-3xl p-12 text-center border-dashed">
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                    <User size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Đang cập nhật thành viên</h3>
                  <p className="text-gray-500 max-w-sm mx-auto">Thông tin chi tiết về các thành viên tại Hoa Kỳ sẽ sớm được bổ sung vào hệ thống.</p>
                </div>
              )}
            </div>
          </div>
        ) : currentPage === 26 ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button 
              onClick={() => goToPage(1)}
              className="flex items-center gap-2 text-blue-600 font-bold mb-8 hover:translate-x-[-4px] transition-transform"
            >
              <ArrowLeft size={20} />
              <span>Quay lại trang chủ</span>
            </button>
            <div className="mb-12">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full mb-4">
                Danh mục chi tiết
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-gray-900 italic">
                Pháp
              </h2>
              <div className="h-1 w-20 bg-blue-600 rounded-full mb-8" />

              {/* Intro Section */}
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 mb-12 shadow-sm">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Thành Lập</div>
                      <div className="font-bold text-gray-900">Trống</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Địa chỉ</div>
                      <div className="font-bold text-gray-900 leading-tight">Trống</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Bổn Mạng</div>
                      <div className="font-bold text-gray-900">Trống</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gray-100" />
                <h3 className="text-sm uppercase tracking-[0.3em] font-black text-blue-600">Các Thành Viên</h3>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
            </div>

            <div className="grid gap-6">
              {CONG_DOAN_PHAP_CONTACTS.length > 0 ? CONG_DOAN_PHAP_CONTACTS.map((contact: any) => (
                <div 
                  key={contact.id}
                  id={contact.id}
                  className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all group overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-100/50 transition-colors" />
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-300 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                          <User size={28} />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">{contact.role}</div>
                          <div className="text-2xl font-black text-gray-900 tracking-tight">{contact.name}</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 border-t border-gray-50 pt-4 md:border-none md:pt-0">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Phone size={16} />
                          </div>
                          <span className="font-bold">{contact.phone || "Để trống"}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Mail size={16} />
                          </div>
                          <span className="font-bold">{contact.email || "Chưa cập nhật"}</span>
                        </div>
                      </div>
                    </div>
                    {contact.birthDate && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-50">
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Ngày sinh</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.birthDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Vào Nhà Tập</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.novitiateDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Khấn trọn</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.vowsDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Chịu chức</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.ordinationDate || "—"}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )) : (
                <div className="bg-gray-50 border border-gray-200 rounded-3xl p-12 text-center border-dashed">
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                    <User size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Đang cập nhật thành viên</h3>
                  <p className="text-gray-500 max-w-sm mx-auto">Thông tin chi tiết về các thành viên tại Pháp sẽ sớm được bổ sung vào hệ thống.</p>
                </div>
              )}
            </div>
          </div>
        ) : currentPage === 27 ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button 
              onClick={() => goToPage(1)}
              className="flex items-center gap-2 text-blue-600 font-bold mb-8 hover:translate-x-[-4px] transition-transform"
            >
              <ArrowLeft size={20} />
              <span>Quay lại trang chủ</span>
            </button>
            <div className="mb-12">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full mb-4">
                Danh mục chi tiết
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-gray-900 italic">
                Tây Ban Nha
              </h2>
              <div className="h-1 w-20 bg-blue-600 rounded-full mb-8" />

              {/* Intro Section */}
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 mb-12 shadow-sm">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Thành Lập</div>
                      <div className="font-bold text-gray-900">Trống</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Địa chỉ</div>
                      <div className="font-bold text-gray-900 leading-tight">Trống</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Bổn Mạng</div>
                      <div className="font-bold text-gray-900">Trống</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gray-100" />
                <h3 className="text-sm uppercase tracking-[0.3em] font-black text-blue-600">Các Thành Viên</h3>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
            </div>

            <div className="grid gap-6">
              {CONG_DOAN_TAY_BAN_NHA_CONTACTS.length > 0 ? CONG_DOAN_TAY_BAN_NHA_CONTACTS.map((contact: any) => (
                <div 
                  key={contact.id}
                  id={contact.id}
                  className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all group overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-100/50 transition-colors" />
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-300 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                          <User size={28} />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">{contact.role}</div>
                          <div className="text-2xl font-black text-gray-900 tracking-tight">{contact.name}</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 border-t border-gray-50 pt-4 md:border-none md:pt-0">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Phone size={16} />
                          </div>
                          <span className="font-bold">{contact.phone || "Để trống"}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Mail size={16} />
                          </div>
                          <span className="font-bold">{contact.email || "Chưa cập nhật"}</span>
                        </div>
                      </div>
                    </div>
                    {contact.birthDate && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-50">
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Ngày sinh</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.birthDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Vào Nhà Tập</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.novitiateDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Khấn trọn</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.vowsDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Chịu chức</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.ordinationDate || "—"}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )) : (
                <div className="bg-gray-50 border border-gray-200 rounded-3xl p-12 text-center border-dashed">
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                    <User size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Đang cập nhật thành viên</h3>
                  <p className="text-gray-500 max-w-sm mx-auto">Thông tin chi tiết về các thành viên tại Tây Ban Nha sẽ sớm được bổ sung vào hệ thống.</p>
                </div>
              )}
            </div>
          </div>
        ) : currentPage === 28 ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button 
              onClick={() => goToPage(1)}
              className="flex items-center gap-2 text-blue-600 font-bold mb-8 hover:translate-x-[-4px] transition-transform"
            >
              <ArrowLeft size={20} />
              <span>Quay lại trang chủ</span>
            </button>
            <div className="mb-12">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full mb-4">
                Danh mục chi tiết
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-gray-900 italic">
                Hà Lan
              </h2>
              <div className="h-1 w-20 bg-blue-600 rounded-full mb-8" />

              {/* Intro Section */}
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 mb-12 shadow-sm">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Thành Lập</div>
                      <div className="font-bold text-gray-900">Trống</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Địa chỉ</div>
                      <div className="font-bold text-gray-900 leading-tight">Trống</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Bổn Mạng</div>
                      <div className="font-bold text-gray-900">Trống</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gray-100" />
                <h3 className="text-sm uppercase tracking-[0.3em] font-black text-blue-600">Các Thành Viên</h3>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
            </div>

            <div className="grid gap-6">
              {CONG_DOAN_HA_LAN_CONTACTS.length > 0 ? CONG_DOAN_HA_LAN_CONTACTS.map((contact: any) => (
                <div 
                  key={contact.id}
                  id={contact.id}
                  className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all group overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-100/50 transition-colors" />
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-300 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                          <User size={28} />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">{contact.role}</div>
                          <div className="text-2xl font-black text-gray-900 tracking-tight">{contact.name}</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 border-t border-gray-50 pt-4 md:border-none md:pt-0">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Phone size={16} />
                          </div>
                          <span className="font-bold">{contact.phone || "Để trống"}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Mail size={16} />
                          </div>
                          <span className="font-bold">{contact.email || "Chưa cập nhật"}</span>
                        </div>
                      </div>
                    </div>
                    {contact.birthDate && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-50">
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Ngày sinh</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.birthDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Vào Nhà Tập</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.novitiateDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Khấn trọn</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.vowsDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Chịu chức</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.ordinationDate || "—"}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )) : (
                <div className="bg-gray-50 border border-gray-200 rounded-3xl p-12 text-center border-dashed">
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                    <User size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Đang cập nhật thành viên</h3>
                  <p className="text-gray-500 max-w-sm mx-auto">Thông tin chi tiết về các thành viên tại Hà Lan sẽ sớm được bổ sung vào hệ thống.</p>
                </div>
              )}
            </div>
          </div>
        ) : currentPage === 29 ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button 
              onClick={() => goToPage(1)}
              className="flex items-center gap-2 text-blue-600 font-bold mb-8 hover:translate-x-[-4px] transition-transform"
            >
              <ArrowLeft size={20} />
              <span>Quay lại trang chủ</span>
            </button>
            <div className="mb-12">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full mb-4">
                Danh mục chi tiết
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-gray-900 italic">
                Pakistan
              </h2>
              <div className="h-1 w-20 bg-blue-600 rounded-full mb-8" />

              {/* Intro Section */}
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 mb-12 shadow-sm">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Thành Lập</div>
                      <div className="font-bold text-gray-900">Trống</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Địa chỉ</div>
                      <div className="font-bold text-gray-900 leading-tight">Trống</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Bổn Mạng</div>
                      <div className="font-bold text-gray-900">Trống</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gray-100" />
                <h3 className="text-sm uppercase tracking-[0.3em] font-black text-blue-600">Các Thành Viên</h3>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
            </div>

            <div className="grid gap-6">
              {CONG_DOAN_PAKISTAN_CONTACTS.length > 0 ? CONG_DOAN_PAKISTAN_CONTACTS.map((contact: any) => (
                <div 
                  key={contact.id}
                  id={contact.id}
                  className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all group overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-100/50 transition-colors" />
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-300 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                          <User size={28} />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">{contact.role}</div>
                          <div className="text-2xl font-black text-gray-900 tracking-tight">{contact.name}</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 border-t border-gray-50 pt-4 md:border-none md:pt-0">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Phone size={16} />
                          </div>
                          <span className="font-bold">{contact.phone || "Để trống"}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Mail size={16} />
                          </div>
                          <span className="font-bold">{contact.email || "Chưa cập nhật"}</span>
                        </div>
                      </div>
                    </div>
                    {contact.birthDate && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-50">
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Ngày sinh</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.birthDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Vào Nhà Tập</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.novitiateDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Khấn trọn</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.vowsDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Chịu chức</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.ordinationDate || "—"}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )) : (
                <div className="bg-gray-50 border border-gray-200 rounded-3xl p-12 text-center border-dashed">
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                    <User size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Đang cập nhật thành viên</h3>
                  <p className="text-gray-500 max-w-sm mx-auto">Thông tin chi tiết về các thành viên tại Pakistan sẽ sớm được bổ sung vào hệ thống.</p>
                </div>
              )}
            </div>
          </div>
        ) : currentPage === 30 ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button 
              onClick={() => goToPage(1)}
              className="flex items-center gap-2 text-blue-600 font-bold mb-8 hover:translate-x-[-4px] transition-transform"
            >
              <ArrowLeft size={20} />
              <span>Quay lại trang chủ</span>
            </button>
            <div className="mb-12">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full mb-4">
                Danh mục chi tiết
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-gray-900 italic">
                Đài Loan
              </h2>
              <div className="h-1 w-20 bg-blue-600 rounded-full mb-8" />

              {/* Intro Section */}
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 mb-12 shadow-sm">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Thành Lập</div>
                      <div className="font-bold text-gray-900">Trống</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Địa chỉ</div>
                      <div className="font-bold text-gray-900 leading-tight">Trống</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Bổn Mạng</div>
                      <div className="font-bold text-gray-900">Trống</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gray-100" />
                <h3 className="text-sm uppercase tracking-[0.3em] font-black text-blue-600">Các Thành Viên</h3>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
            </div>

            <div className="grid gap-6">
              {CONG_DOAN_DAI_LOAN_CONTACTS.length > 0 ? CONG_DOAN_DAI_LOAN_CONTACTS.map((contact: any) => (
                <div 
                  key={contact.id}
                  id={contact.id}
                  className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all group overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-100/50 transition-colors" />
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-300 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                          <User size={28} />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">{contact.role}</div>
                          <div className="text-2xl font-black text-gray-900 tracking-tight">{contact.name}</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 border-t border-gray-50 pt-4 md:border-none md:pt-0">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Phone size={16} />
                          </div>
                          <span className="font-bold">{contact.phone || "Để trống"}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Mail size={16} />
                          </div>
                          <span className="font-bold">{contact.email || "Chưa cập nhật"}</span>
                        </div>
                      </div>
                    </div>
                    {contact.birthDate && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-50">
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Ngày sinh</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.birthDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Vào Nhà Tập</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.novitiateDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Khấn trọn</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.vowsDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Chịu chức</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.ordinationDate || "—"}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )) : (
                <div className="bg-gray-50 border border-gray-200 rounded-3xl p-12 text-center border-dashed">
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                    <User size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Đang cập nhật thành viên</h3>
                  <p className="text-gray-500 max-w-sm mx-auto">Thông tin chi tiết về các thành viên tại Đài Loan sẽ sớm được bổ sung vào hệ thống.</p>
                </div>
              )}
            </div>
          </div>
        ) : currentPage === 31 ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button 
              onClick={() => goToPage(1)}
              className="flex items-center gap-2 text-blue-600 font-bold mb-8 hover:translate-x-[-4px] transition-transform"
            >
              <ArrowLeft size={20} />
              <span>Quay lại trang chủ</span>
            </button>
            <div className="mb-12">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full mb-4">
                Danh mục chi tiết
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-gray-900 italic">
                Papua New Guinea
              </h2>
              <div className="h-1 w-20 bg-blue-600 rounded-full mb-8" />

              {/* Intro Section */}
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 mb-12 shadow-sm">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Thành Lập</div>
                      <div className="font-bold text-gray-900">Trống</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Địa chỉ</div>
                      <div className="font-bold text-gray-900 leading-tight">Trống</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Bổn Mạng</div>
                      <div className="font-bold text-gray-900">Trống</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gray-100" />
                <h3 className="text-sm uppercase tracking-[0.3em] font-black text-blue-600">Các Thành Viên</h3>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
            </div>

            <div className="grid gap-6">
              {CONG_DOAN_PNG_CONTACTS.length > 0 ? CONG_DOAN_PNG_CONTACTS.map((contact: any) => (
                <div 
                  key={contact.id}
                  id={contact.id}
                  className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all group overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-100/50 transition-colors" />
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-300 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                          <User size={28} />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">{contact.role}</div>
                          <div className="text-2xl font-black text-gray-900 tracking-tight">{contact.name}</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 border-t border-gray-50 pt-4 md:border-none md:pt-0">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Phone size={16} />
                          </div>
                          <span className="font-bold">{contact.phone || "Để trống"}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Mail size={16} />
                          </div>
                          <span className="font-bold">{contact.email || "Chưa cập nhật"}</span>
                        </div>
                      </div>
                    </div>
                    {contact.birthDate && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-50">
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Ngày sinh</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.birthDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Vào Nhà Tập</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.novitiateDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Khấn trọn</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.vowsDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Chịu chức</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.ordinationDate || "—"}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )) : (
                <div className="bg-gray-50 border border-gray-200 rounded-3xl p-12 text-center border-dashed">
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                    <User size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Đang cập nhật thành viên</h3>
                  <p className="text-gray-500 max-w-sm mx-auto">Thông tin chi tiết về các thành viên tại Papua New Guinea sẽ sớm được bổ sung vào hệ thống.</p>
                </div>
              )}
            </div>
          </div>
        ) : currentPage === 32 ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button 
              onClick={() => goToPage(1)}
              className="flex items-center gap-2 text-blue-600 font-bold mb-8 hover:translate-x-[-4px] transition-transform"
            >
              <ArrowLeft size={20} />
              <span>Quay lại trang chủ</span>
            </button>
            <div className="mb-12">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full mb-4">
                Danh mục chi tiết
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-gray-900 italic">
                Nhật Bản
              </h2>
              <div className="h-1 w-20 bg-blue-600 rounded-full mb-8" />

              {/* Intro Section */}
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 mb-12 shadow-sm">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Thành Lập</div>
                      <div className="font-bold text-gray-900">Trống</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Địa chỉ</div>
                      <div className="font-bold text-gray-900 leading-tight">Trống</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Bổn Mạng</div>
                      <div className="font-bold text-gray-900">Trống</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gray-100" />
                <h3 className="text-sm uppercase tracking-[0.3em] font-black text-blue-600">Các Thành Viên</h3>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
            </div>

            <div className="grid gap-6">
              {CONG_DOAN_NHAT_CONTACTS.length > 0 ? CONG_DOAN_NHAT_CONTACTS.map((contact: any) => (
                <div 
                  key={contact.id}
                  id={contact.id}
                  className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all group overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-100/50 transition-colors" />
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-300 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                          <User size={28} />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">{contact.role}</div>
                          <div className="text-2xl font-black text-gray-900 tracking-tight">{contact.name}</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 border-t border-gray-50 pt-4 md:border-none md:pt-0">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Phone size={16} />
                          </div>
                          <span className="font-bold">{contact.phone || "Để trống"}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Mail size={16} />
                          </div>
                          <span className="font-bold">{contact.email || "Chưa cập nhật"}</span>
                        </div>
                      </div>
                    </div>
                    {contact.birthDate && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-50">
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Ngày sinh</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.birthDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Vào Nhà Tập</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.novitiateDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Khấn trọn</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.vowsDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Chịu chức</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.ordinationDate || "—"}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )) : (
                <div className="bg-gray-50 border border-gray-200 rounded-3xl p-12 text-center border-dashed">
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                    <User size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Đang cập nhật thành viên</h3>
                  <p className="text-gray-500 max-w-sm mx-auto">Thông tin chi tiết về các thành viên tại Nhật Bản sẽ sớm được bổ sung vào hệ thống.</p>
                </div>
              )}
            </div>
          </div>
        ) : currentPage === 33 ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button 
              onClick={() => goToPage(1)}
              className="flex items-center gap-2 text-blue-600 font-bold mb-8 hover:translate-x-[-4px] transition-transform"
            >
              <ArrowLeft size={20} />
              <span>Quay lại trang chủ</span>
            </button>
            <div className="mb-12">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full mb-4">
                Danh mục chi tiết
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-gray-900 italic">
                Lào
              </h2>
              <div className="h-1 w-20 bg-blue-600 rounded-full mb-8" />

              {/* Intro Section */}
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 mb-12 shadow-sm">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Thành Lập</div>
                      <div className="font-bold text-gray-900">Trống</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Địa chỉ</div>
                      <div className="font-bold text-gray-900 leading-tight">Trống</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Bổn Mạng</div>
                      <div className="font-bold text-gray-900">Trống</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gray-100" />
                <h3 className="text-sm uppercase tracking-[0.3em] font-black text-blue-600">Các Thành Viên</h3>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
            </div>

            <div className="grid gap-6">
              {CONG_DOAN_LAO_CONTACTS.length > 0 ? CONG_DOAN_LAO_CONTACTS.map((contact: any) => (
                <div 
                  key={contact.id}
                  id={contact.id}
                  className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all group overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-100/50 transition-colors" />
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-300 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                          <User size={28} />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">{contact.role}</div>
                          <div className="text-2xl font-black text-gray-900 tracking-tight">{contact.name}</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 border-t border-gray-50 pt-4 md:border-none md:pt-0">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Phone size={16} />
                          </div>
                          <span className="font-bold">{contact.phone || "Để trống"}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Mail size={16} />
                          </div>
                          <span className="font-bold">{contact.email || "Chưa cập nhật"}</span>
                        </div>
                      </div>
                    </div>
                    {contact.birthDate && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-50">
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Ngày sinh</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.birthDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Vào Nhà Tập</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.novitiateDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Khấn trọn</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.vowsDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Chịu chức</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.ordinationDate || "—"}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )) : (
                <div className="bg-gray-50 border border-gray-200 rounded-3xl p-12 text-center border-dashed">
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                    <User size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Đang cập nhật thành viên</h3>
                  <p className="text-gray-500 max-w-sm mx-auto">Thông tin chi tiết về các thành viên tại Lào sẽ sớm được bổ sung vào hệ thống.</p>
                </div>
              )}
            </div>
          </div>
        ) : currentPage === 34 ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button 
              onClick={() => goToPage(1)}
              className="flex items-center gap-2 text-blue-600 font-bold mb-8 hover:translate-x-[-4px] transition-transform"
            >
              <ArrowLeft size={20} />
              <span>Quay lại trang chủ</span>
            </button>
            <div className="mb-12">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full mb-4">
                Danh mục chi tiết
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-gray-900 italic">
                Costa Rica
              </h2>
              <div className="h-1 w-20 bg-blue-600 rounded-full mb-8" />

              {/* Intro Section */}
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 mb-12 shadow-sm">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Thành Lập</div>
                      <div className="font-bold text-gray-900">Trống</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Địa chỉ</div>
                      <div className="font-bold text-gray-900 leading-tight">Trống</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Bổn Mạng</div>
                      <div className="font-bold text-gray-900">Trống</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gray-100" />
                <h3 className="text-sm uppercase tracking-[0.3em] font-black text-blue-600">Các Thành Viên</h3>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
            </div>

            <div className="grid gap-6">
              {CONG_DOAN_COSTA_RICA_CONTACTS.length > 0 ? CONG_DOAN_COSTA_RICA_CONTACTS.map((contact: any) => (
                <div 
                  key={contact.id}
                  id={contact.id}
                  className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all group overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-100/50 transition-colors" />
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-300 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                          <User size={28} />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">{contact.role}</div>
                          <div className="text-2xl font-black text-gray-900 tracking-tight">{contact.name}</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 border-t border-gray-50 pt-4 md:border-none md:pt-0">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Phone size={16} />
                          </div>
                          <span className="font-bold">{contact.phone || "Để trống"}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Mail size={16} />
                          </div>
                          <span className="font-bold">{contact.email || "Chưa cập nhật"}</span>
                        </div>
                      </div>
                    </div>
                    {contact.birthDate && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-50">
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Ngày sinh</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.birthDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Vào Nhà Tập</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.novitiateDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Khấn trọn</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.vowsDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Chịu chức</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.ordinationDate || "—"}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )) : (
                <div className="bg-gray-50 border border-gray-200 rounded-3xl p-12 text-center border-dashed">
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                    <User size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Đang cập nhật thành viên</h3>
                  <p className="text-gray-500 max-w-sm mx-auto">Thông tin chi tiết về các thành viên tại Costa Rica sẽ sớm được bổ sung vào hệ thống.</p>
                </div>
              )}
            </div>
          </div>
        ) : currentPage === 35 ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button 
              onClick={() => goToPage(1)}
              className="flex items-center gap-2 text-blue-600 font-bold mb-8 hover:translate-x-[-4px] transition-transform"
            >
              <ArrowLeft size={20} />
              <span>Quay lại trang chủ</span>
            </button>
            <div className="mb-12">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full mb-4">
                Danh mục chi tiết
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-gray-900 italic">
                Pháp (Du Học)
              </h2>
              <div className="h-1 w-20 bg-blue-600 rounded-full mb-8" />

              {/* Intro Section */}
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 mb-12 shadow-sm">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Thành Lập</div>
                      <div className="font-bold text-gray-900">Trống</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Địa chỉ</div>
                      <div className="font-bold text-gray-900 leading-tight">Trống</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Bổn Mạng</div>
                      <div className="font-bold text-gray-900">Trống</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gray-100" />
                <h3 className="text-sm uppercase tracking-[0.3em] font-black text-blue-600">Các Thành Viên</h3>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
            </div>

            <div className="grid gap-6">
              {DU_HOC_PHAP_CONTACTS.length > 0 ? DU_HOC_PHAP_CONTACTS.map((contact: any) => (
                <div 
                  key={contact.id}
                  id={contact.id}
                  className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all group overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-100/50 transition-colors" />
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-300 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                          <User size={28} />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">{contact.role}</div>
                          <div className="text-2xl font-black text-gray-900 tracking-tight">{contact.name}</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 border-t border-gray-50 pt-4 md:border-none md:pt-0">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Phone size={16} />
                          </div>
                          <span className="font-bold">{contact.phone || "Để trống"}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Mail size={16} />
                          </div>
                          <span className="font-bold">{contact.email || "Chưa cập nhật"}</span>
                        </div>
                      </div>
                    </div>
                    {contact.birthDate && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-50">
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Ngày sinh</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.birthDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Vào Nhà Tập</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.novitiateDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Khấn trọn</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.vowsDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Chịu chức</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.ordinationDate || "—"}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )) : (
                <div className="bg-gray-50 border border-gray-200 rounded-3xl p-12 text-center border-dashed">
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                    <User size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Đang cập nhật thành viên</h3>
                  <p className="text-gray-500 max-w-sm mx-auto">Thông tin chi tiết về các thành viên tại Pháp sẽ sớm được bổ sung vào hệ thống.</p>
                </div>
              )}
            </div>
          </div>
        ) : currentPage === 36 ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button 
              onClick={() => goToPage(1)}
              className="flex items-center gap-2 text-blue-600 font-bold mb-8 hover:translate-x-[-4px] transition-transform"
            >
              <ArrowLeft size={20} />
              <span>Quay lại trang chủ</span>
            </button>
            <div className="mb-12">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full mb-4">
                Danh mục chi tiết
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-gray-900 italic">
                Hoa Kỳ (Du Học)
              </h2>
              <div className="h-1 w-20 bg-blue-600 rounded-full mb-8" />

              {/* Intro Section */}
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 mb-12 shadow-sm">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Thành Lập</div>
                      <div className="font-bold text-gray-900">Trống</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Địa chỉ</div>
                      <div className="font-bold text-gray-900 leading-tight">Trống</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Bổn Mạng</div>
                      <div className="font-bold text-gray-900">Trống</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gray-100" />
                <h3 className="text-sm uppercase tracking-[0.3em] font-black text-blue-600">Các Thành Viên</h3>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
            </div>

            <div className="grid gap-6">
              {DU_HOC_HOA_KY_CONTACTS.length > 0 ? DU_HOC_HOA_KY_CONTACTS.map((contact: any) => (
                <div 
                  key={contact.id}
                  id={contact.id}
                  className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all group overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-100/50 transition-colors" />
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-300 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                          <User size={28} />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">{contact.role}</div>
                          <div className="text-2xl font-black text-gray-900 tracking-tight">{contact.name}</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 border-t border-gray-50 pt-4 md:border-none md:pt-0">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Phone size={16} />
                          </div>
                          <span className="font-bold">{contact.phone || "Để trống"}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Mail size={16} />
                          </div>
                          <span className="font-bold">{contact.email || "Chưa cập nhật"}</span>
                        </div>
                      </div>
                    </div>
                    {contact.birthDate && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-50">
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Ngày sinh</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.birthDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Vào Nhà Tập</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.novitiateDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Khấn trọn</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.vowsDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Chịu chức</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.ordinationDate || "—"}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )) : (
                <div className="bg-gray-50 border border-gray-200 rounded-3xl p-12 text-center border-dashed">
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                    <User size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Đang cập nhật thành viên</h3>
                  <p className="text-gray-500 max-w-sm mx-auto">Thông tin chi tiết về các thành viên tại Hoa Kỳ sẽ sớm được bổ sung vào hệ thống.</p>
                </div>
              )}
            </div>
          </div>
        ) : currentPage === 37 ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button 
              onClick={() => goToPage(1)}
              className="flex items-center gap-2 text-blue-600 font-bold mb-8 hover:translate-x-[-4px] transition-transform"
            >
              <ArrowLeft size={20} />
              <span>Quay lại trang chủ</span>
            </button>
            <div className="mb-12">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full mb-4">
                Danh mục chi tiết
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-gray-900 italic">
                Australia
              </h2>
              <div className="h-1 w-20 bg-blue-600 rounded-full mb-8" />

              {/* Intro Section */}
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 mb-12 shadow-sm">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Thành Lập</div>
                      <div className="font-bold text-gray-900">Trống</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Địa chỉ</div>
                      <div className="font-bold text-gray-900 leading-tight">Trống</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Bổn Mạng</div>
                      <div className="font-bold text-gray-900">Trống</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gray-100" />
                <h3 className="text-sm uppercase tracking-[0.3em] font-black text-blue-600">Các Thành Viên</h3>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
            </div>

            <div className="grid gap-6">
              {DU_HOC_AUSTRALIA_CONTACTS.length > 0 ? DU_HOC_AUSTRALIA_CONTACTS.map((contact: any) => (
                <div 
                  key={contact.id}
                  id={contact.id}
                  className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all group overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-100/50 transition-colors" />
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-300 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                          <User size={28} />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">{contact.role}</div>
                          <div className="text-2xl font-black text-gray-900 tracking-tight">{contact.name}</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 border-t border-gray-50 pt-4 md:border-none md:pt-0">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Phone size={16} />
                          </div>
                          <span className="font-bold">{contact.phone || "Để trống"}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Mail size={16} />
                          </div>
                          <span className="font-bold">{contact.email || "Chưa cập nhật"}</span>
                        </div>
                      </div>
                    </div>
                    {contact.birthDate && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-50">
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Ngày sinh</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.birthDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Vào Nhà Tập</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.novitiateDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Khấn trọn</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.vowsDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Chịu chức</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.ordinationDate || "—"}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )) : (
                <div className="bg-gray-50 border border-gray-200 rounded-3xl p-12 text-center border-dashed">
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                    <User size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Đang cập nhật thành viên</h3>
                  <p className="text-gray-500 max-w-sm mx-auto">Thông tin chi tiết về các thành viên tại Australia sẽ sớm được bổ sung vào hệ thống.</p>
                </div>
              )}
            </div>
          </div>
        ) : currentPage === 9999 ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button 
              onClick={() => goToPage(1)}
              className="flex items-center gap-2 text-blue-600 font-bold mb-8 hover:translate-x-[-4px] transition-transform"
            >
              <ArrowLeft size={20} />
              <span>Quay lại trang chủ</span>
            </button>
            <div className="mb-12">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full mb-4">
                Danh mục chi tiết
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-gray-900 italic">
                Australia (Du Học)
              </h2>
              <div className="h-1 w-20 bg-blue-600 rounded-full mb-8" />

              {/* Intro Section */}
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 mb-12 shadow-sm">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Thành Lập</div>
                      <div className="font-bold text-gray-900">Trống</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Địa chỉ</div>
                      <div className="font-bold text-gray-900 leading-tight">Trống</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Bổn Mạng</div>
                      <div className="font-bold text-gray-900">Trống</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gray-100" />
                <h3 className="text-sm uppercase tracking-[0.3em] font-black text-blue-600">Các Thành Viên</h3>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
            </div>

            <div className="grid gap-6">
              {DU_HOC_AUSTRALIA_CONTACTS.length > 0 ? DU_HOC_AUSTRALIA_CONTACTS.map((contact: any) => (
                <div 
                  key={contact.id}
                  id={contact.id}
                  className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all group overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-100/50 transition-colors" />
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-300 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                          <User size={28} />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">{contact.role}</div>
                          <div className="text-2xl font-black text-gray-900 tracking-tight">{contact.name}</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 border-t border-gray-50 pt-4 md:border-none md:pt-0">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Phone size={16} />
                          </div>
                          <span className="font-bold">{contact.phone || "Để trống"}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Mail size={16} />
                          </div>
                          <span className="font-bold">{contact.email || "Chưa cập nhật"}</span>
                        </div>
                      </div>
                    </div>
                    {contact.birthDate && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-50">
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Ngày sinh</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.birthDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Vào Nhà Tập</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.novitiateDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Khấn trọn</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.vowsDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Chịu chức</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.ordinationDate || "—"}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )) : (
                <div className="bg-gray-50 border border-gray-200 rounded-3xl p-12 text-center border-dashed">
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                    <User size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Đang cập nhật thành viên</h3>
                  <p className="text-gray-500 max-w-sm mx-auto">Thông tin chi tiết về các thành viên tại Australia sẽ sớm được bổ sung vào hệ thống.</p>
                </div>
              )}
            </div>
          </div>
        ) : currentPage === 38 ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button 
              onClick={() => goToPage(1)}
              className="flex items-center gap-2 text-blue-600 font-bold mb-8 hover:translate-x-[-4px] transition-transform"
            >
              <ArrowLeft size={20} />
              <span>Quay lại trang chủ</span>
            </button>
            <div className="mb-12">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full mb-4">
                Danh mục chi tiết
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-gray-900 italic">
                Ý (Du Học)
              </h2>
              <div className="h-1 w-20 bg-blue-600 rounded-full mb-8" />

              {/* Intro Section */}
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 mb-12 shadow-sm">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Thành Lập</div>
                      <div className="font-bold text-gray-900">Trống</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Địa chỉ</div>
                      <div className="font-bold text-gray-900 leading-tight">Trống</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Bổn Mạng</div>
                      <div className="font-bold text-gray-900">Trống</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gray-100" />
                <h3 className="text-sm uppercase tracking-[0.3em] font-black text-blue-600">Các Thành Viên</h3>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
            </div>

            <div className="grid gap-6">
              {DU_HOC_Y_CONTACTS.length > 0 ? DU_HOC_Y_CONTACTS.map((contact: any) => (
                <div 
                  key={contact.id}
                  id={contact.id}
                  className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all group overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-100/50 transition-colors" />
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-300 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                          <User size={28} />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">{contact.role}</div>
                          <div className="text-2xl font-black text-gray-900 tracking-tight">{contact.name}</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 border-t border-gray-50 pt-4 md:border-none md:pt-0">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Phone size={16} />
                          </div>
                          <span className="font-bold">{contact.phone || "Để trống"}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Mail size={16} />
                          </div>
                          <span className="font-bold">{contact.email || "Chưa cập nhật"}</span>
                        </div>
                      </div>
                    </div>
                    {contact.birthDate && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-50">
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Ngày sinh</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.birthDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Vào Nhà Tập</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.novitiateDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Khấn trọn</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.vowsDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Chịu chức</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.ordinationDate || "—"}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )) : (
                <div className="bg-gray-50 border border-gray-200 rounded-3xl p-12 text-center border-dashed">
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                    <User size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Đang cập nhật thành viên</h3>
                  <p className="text-gray-500 max-w-sm mx-auto">Thông tin chi tiết về các thành viên tại Ý sẽ sớm được bổ sung vào hệ thống.</p>
                </div>
              )}
            </div>
          </div>
        ) : currentPage === 39 ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button 
              onClick={() => goToPage(1)}
              className="flex items-center gap-2 text-blue-600 font-bold mb-8 hover:translate-x-[-4px] transition-transform"
            >
              <ArrowLeft size={20} />
              <span>Quay lại trang chủ</span>
            </button>
            <div className="mb-12">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full mb-4">
                Danh mục chi tiết
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-gray-900 italic">
                Philippines (Du Học)
              </h2>
              <div className="h-1 w-20 bg-blue-600 rounded-full mb-8" />

              {/* Intro Section */}
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 mb-12 shadow-sm">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Thành Lập</div>
                      <div className="font-bold text-gray-900">Trống</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Địa chỉ</div>
                      <div className="font-bold text-gray-900 leading-tight">Trống</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Bổn Mạng</div>
                      <div className="font-bold text-gray-900">Trống</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gray-100" />
                <h3 className="text-sm uppercase tracking-[0.3em] font-black text-blue-600">Các Thành Viên</h3>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
            </div>

            <div className="grid gap-6">
              {DU_HOC_PHILIPPINES_CONTACTS.length > 0 ? DU_HOC_PHILIPPINES_CONTACTS.map((contact: any) => (
                <div 
                  key={contact.id}
                  id={contact.id}
                  className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all group overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-100/50 transition-colors" />
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-300 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                          <User size={28} />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">{contact.role}</div>
                          <div className="text-2xl font-black text-gray-900 tracking-tight">{contact.name}</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 border-t border-gray-50 pt-4 md:border-none md:pt-0">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Phone size={16} />
                          </div>
                          <span className="font-bold">{contact.phone || "Để trống"}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Mail size={16} />
                          </div>
                          <span className="font-bold">{contact.email || "Chưa cập nhật"}</span>
                        </div>
                      </div>
                    </div>
                    {contact.birthDate && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-50">
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Ngày sinh</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.birthDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Vào Nhà Tập</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.novitiateDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Khấn trọn</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.vowsDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Chịu chức</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.ordinationDate || "—"}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )) : (
                <div className="bg-gray-50 border border-gray-200 rounded-3xl p-12 text-center border-dashed">
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                    <User size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Đang cập nhật thành viên</h3>
                  <p className="text-gray-500 max-w-sm mx-auto">Thông tin chi tiết về các thành viên tại Philippines sẽ sớm được bổ sung vào hệ thống.</p>
                </div>
              )}
            </div>
          </div>
        ) : currentPage === 40 ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button 
              onClick={() => goToPage(1)}
              className="flex items-center gap-2 text-blue-600 font-bold mb-8 hover:translate-x-[-4px] transition-transform"
            >
              <ArrowLeft size={20} />
              <span>Quay lại trang chủ</span>
            </button>
            <div className="mb-12">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full mb-4">
                Danh mục chi tiết
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-gray-900 italic">
                Hàn Quốc
              </h2>
              <div className="h-1 w-20 bg-blue-600 rounded-full mb-8" />

              {/* Intro Section */}
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 mb-12 shadow-sm">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Thành Lập</div>
                      <div className="font-bold text-gray-900">Trống</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Địa chỉ</div>
                      <div className="font-bold text-gray-900 leading-tight">Trống</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Bổn Mạng</div>
                      <div className="font-bold text-gray-900">Trống</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gray-100" />
                <h3 className="text-sm uppercase tracking-[0.3em] font-black text-blue-600">Các Thành Viên</h3>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
            </div>

            <div className="grid gap-6">
              {CONG_DOAN_HAN_QUOC_CONTACTS.length > 0 ? CONG_DOAN_HAN_QUOC_CONTACTS.map((contact: any) => (
                <div 
                  key={contact.id}
                  id={contact.id}
                  className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all group overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-100/50 transition-colors" />
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-300 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                          <User size={28} />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">{contact.role}</div>
                          <div className="text-2xl font-black text-gray-900 tracking-tight">{contact.name}</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 border-t border-gray-50 pt-4 md:border-none md:pt-0">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Phone size={16} />
                          </div>
                          <span className="font-bold">{contact.phone || "Để trống"}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Mail size={16} />
                          </div>
                          <span className="font-bold">{contact.email || "Chưa cập nhật"}</span>
                        </div>
                      </div>
                    </div>
                    {contact.birthDate && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-50">
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Ngày sinh</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.birthDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Vào Nhà Tập</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.novitiateDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Khấn trọn</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.vowsDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Chịu chức</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.ordinationDate || "—"}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )) : (
                <div className="bg-gray-50 border border-gray-200 rounded-3xl p-12 text-center border-dashed">
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                    <User size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Đang cập nhật thành viên</h3>
                  <p className="text-gray-500 max-w-sm mx-auto">Thông tin chi tiết về các thành viên tại Hàn Quốc sẽ sớm được bổ sung vào hệ thống.</p>
                </div>
              )}
            </div>
          </div>
        ) : currentPage === 41 ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button 
              onClick={() => goToPage(1)}
              className="flex items-center gap-2 text-blue-600 font-bold mb-8 hover:translate-x-[-4px] transition-transform"
            >
              <ArrowLeft size={20} />
              <span>Quay lại trang chủ</span>
            </button>
            <div className="mb-12">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full mb-4">
                Danh mục chi tiết
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-gray-900 italic">
                Tổng thành viên (175)
              </h2>
              <div className="h-1 w-20 bg-blue-600 rounded-full mb-8" />

              {/* Intro Section */}
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 mb-12 shadow-sm">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Thống kê cơ cấu nhân sự</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Tổng số thành viên trong Tu Hội Truyền Giáo Vinh Sơn Tỉnh Dòng Việt Nam hiện tại là 175 thành viên, bao gồm:
                    </p>
                    <ul className="list-disc pl-5 mt-3 space-y-1 text-sm text-gray-600">
                      <li>Linh mục: 159 thành viên</li>
                      <li>Phó tế: 11 thành viên</li>
                      <li>Tu huynh: 5 thành viên</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Độ tuổi trung bình</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Phần lớn nhân sự đang trong độ tuổi sung sức phục vụ với độ tuổi trung bình là 46.4 tuổi. Hệ thống danh phả ghi nhận đầy đủ thông tin của tất cả các thành viên hiện đang phục vụ tại các Cộng đoàn, Ban ngành và Du học trên toàn thế giới.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-gray-100" />
                <h3 className="text-sm uppercase tracking-[0.3em] font-black text-blue-600">Danh Sách Tất Cả Thành Viên ({sortedAllMembers.length})</h3>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
            </div>

            <div className="grid gap-6">
              {sortedAllMembers.map((contact: any) => (
                <div 
                  key={contact.id}
                  id={contact.id}
                  className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all group overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-100/50 transition-colors" />
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-300 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                          <User size={28} />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1">{contact.role || "Thành viên"} • {getHouseName(contact.type)}</div>
                          <div className="text-2xl font-black text-gray-900 tracking-tight">{contact.name}</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 border-t border-gray-50 pt-4 md:border-none md:pt-0">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Phone size={16} />
                          </div>
                          <span className="font-bold">{contact.phone || "Để trống"}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <Mail size={16} />
                          </div>
                          <span className="font-bold">{contact.email || "Chưa cập nhật"}</span>
                        </div>
                      </div>
                    </div>
                    {contact.birthDate && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-50">
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Ngày sinh</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.birthDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Vào Nhà Tập</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.novitiateDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Khấn trọn</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.vowsDate}</div>
                        </div>
                        <div>
                          <div className="text-[9px] uppercase tracking-wider text-gray-400 font-bold mb-1">Chịu chức</div>
                          <div className="text-sm font-bold text-gray-900 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">{contact.ordinationDate || "—"}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="py-20 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Trang đang được cập nhật</h3>
            <p className="text-gray-500 mb-8">Nội dung cho trang {currentPage} sẽ sớm có sẵn.</p>
            <button 
              onClick={() => goToPage(1)}
              className="px-6 py-2 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors"
            >
              Về trang chủ
            </button>
          </div>
        )}

        {/* Pagination Section */}
        <div className="flex flex-col items-center gap-6 mt-12 pb-12">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => currentPage > 1 && goToPage(currentPage - 1)}
              className="p-2 rounded-lg border border-gray-100 text-gray-400 hover:bg-gray-50 hover:text-gray-900 transition-colors disabled:opacity-50" 
              disabled={currentPage === 1}
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex items-center gap-1 flex-wrap justify-center">
               {visiblePages.map((page, index) => {
                if (page === '...') {
                  return (
                    <span key={`ellipsis-${index}`} className="px-2 text-gray-400 font-bold select-none">
                      ...
                    </span>
                  );
                }
                return (
                  <button 
                    key={page}
                    onClick={() => goToPage(page as number)}
                    className={`w-10 h-10 rounded-lg font-bold text-sm transition-all ${currentPage === page ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'border border-gray-100 text-gray-600 hover:bg-gray-50'}`}
                  >
                    {page}
                  </button>
                );
              })}
            </div>

            <button 
              onClick={() => currentPage < 41 && goToPage(currentPage + 1)}
              className="p-2 rounded-lg border border-gray-100 text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors disabled:opacity-50"
              disabled={currentPage === 41}
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">
            Trang {currentPage} trên 41
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-12 border-t border-gray-100 mt-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400">
          <p>© 2026 Trang Danh Bạ. Bản Quyền Thuộc Về Tu Hội Truyền Giáo Vinh Sơn Tỉnh Dòng Việt Nam.</p>
          <div className="flex items-center gap-6 font-medium">
            <a href="#" className="hover:text-blue-600 transition-colors">Điều khoản</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Bảo mật</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Hỗ trợ</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
