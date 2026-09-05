import { SiteConfig, GalleryImage, TimelineStep, DepartmentItem } from '../types';

export const SITE_CONFIG: SiteConfig = {
  schoolName: '',
  schoolUrl: 'https://www.facebook.com/truongdhxaydung',
  teamName: 'ĐỘI SVTN KHOA CÔNG NGHỆ THÔNG TIN',
  teamShortName: 'FIT - HUCE',
  generation: 'TTVF20',
  campaignTitle: 'ĐỘI SVTN KHOA CNTT TUYỂN CTV F20',
  facebookUrl: 'https://www.facebook.com/fit.huce',
  tiktokUrl: 'https://www.tiktok.com/@fit.huce',
  formRegisterUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdDjQrpmpsB9p5_DN52LaB9iLX5b5gmkiK2fl0DZYeJxwRcmg/viewform',
  youtubeVideoId: 'vSuB3dWmbwI',
  originalImagesBaseUrl: 'https://fit-huce.github.io/ttvf18/images/',
};

// Nội dung giới thiệu nguyên bản từ link gốc fit-huce.github.io/ttvf18/Home.html
export const ABOUT_ORIGINAL_TEXT = 
  'Đội SVTN Khoa Công Nghệ Thông Tin được thành lập vào năm 2006. Trải qua thời gian dài hình thành, hoạt động và phát triển, Đội là một tổ chức có tính kỉ luật, hoạt động sôi nổi với nhiều chương trình tình nguyện, tổ chức gây quỹ, các buổi thiện nguyện, hỗ trợ các phường, ban xã nhằm tạo ra giá trị tốt đẹp cho cộng đồng và xã hội. Đây còn là nơi để các thành viên giao lưu, học hỏi nhiều điều từ các anh chị thế hệ đi trước, hoàn thiện hơn cả trong học tập và kĩ năng sống. Mỗi thành viên trong Đội đều là những con người nhiệt huyết, năng động và luôn luôn sẵn sàng giúp đỡ mọi người khó khăn. Đặc biệt là mỗi cá nhân đều mang một bản sắc riêng cực kì cá tính và tài năng. Quan trọng nhất và cũng là điều tự hào của Đội đó là tinh thần vượt khó, luôn luôn cố gắng hoàn thành mọi mục tiêu trong mỗi chương trình đặt ra. Các thành viên luôn cố gắng mang lại thật nhiều điều mới lạ, thật nhiều điều tốt đẹp để khiến thanh xuân trở nên thật đáng nhớ.';

export const HIGHLIGHT_STATS = [
  {
    label: 'Năm thành lập',
    value: '2006',
    description: 'Hành trình cống hiến vì cộng đồng',
    icon: 'Flag',
  },
  {
    label: 'Thế hệ phát triển',
    value: 'F20',
    description: 'Tuyển CTV F20 tiếp bước truyền thống',
    icon: 'Flame',
  },
  {
    label: 'Tinh thần cốt lõi',
    value: 'Kỷ luật & Vượt khó',
    description: 'Năng động, sẻ chia và trách nhiệm',
    icon: 'ShieldCheck',
  },
  {
    label: 'Môi trường rèn luyện',
    value: 'Thanh xuân trọn vẹn',
    description: 'Rèn luyện kỹ năng sống & chuyên môn',
    icon: 'HeartHandshake',
  },
];

// Danh sách các ban chuyên môn trong Đội SVTN Khoa CNTT
export const DEPARTMENTS: DepartmentItem[] = [
  {
    name: 'Ban Chuyên Môn & Kỹ Thuật CNTT',
    tagline: 'Tech Core & Innovations',
    desc: 'Ứng dụng kiến thức Công nghệ thông tin vào quản lý, phát triển các nền tảng số, landing page, kỹ thuật sự kiện và hỗ trợ giải pháp số cho các hoạt động của Đội.',
    iconName: 'Laptop',
    skills: ['Web/App', 'Hỗ trợ kỹ thuật', 'Tư duy logic', 'Đổi mới sáng tạo'],
  },
  {
    name: 'Ban Truyền Thông',
    tagline: 'Creative & Media Squad',
    desc: 'Lên ý tưởng kịch bản, thiết kế ấn phẩm đồ họa, chụp ảnh, quay dựng video clip và phụ trách các kênh mạng xã hội (Facebook, TikTok) để lan tỏa hình ảnh áo xanh.',
    iconName: 'Camera',
    skills: ['Content Writing', 'Photoshop/Canva', 'Video Editing', 'Social Media'],
  },
  {
    name: 'Ban Sự Kiện & Phong Trào',
    tagline: 'Spirit & Event Makers',
    desc: 'Lên kế hoạch tổ chức các chương trình thiện nguyện, chiến dịch Mùa hè xanh, Tiếp sức mùa thi, hoạt động teambuilding và giao lưu các thế hệ sinh viên.',
    iconName: 'Sparkles',
    skills: ['Tổ chức sự kiện', 'MC / Hoạt náo', 'Quản lý thời gian', 'Lãnh đạo nhóm'],
  },
  {
    name: 'Ban Đối Ngoại & Hậu Cần',
    tagline: 'Logistics & External Relations',
    desc: 'Cầu nối liên hệ với các đơn vị, nhà tài trợ, phường xã; phụ trách công tác hậu cần, chuẩn bị cơ sở vật chất chu đáo cho mọi chiến dịch.',
    iconName: 'Handshake',
    skills: ['Giao tiếp đàm phán', 'Quản lý tài chính/vật phẩm', 'Cẩn thận, chu đáo'],
  },
];

// Toàn bộ hình ảnh thực tế từ web gốc fit-huce.github.io
export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'img-ao-xanh',
    title: 'Màu Áo Xanh Thanh Xuân',
    caption: 'Tự hào màu áo xanh tình nguyện Đội SVTN Khoa Công Nghệ Thông Tin - HUCE',
    url: 'https://fit-huce.github.io/ttvf18/images/aaoxanh.jpg',
    tag: 'Áo xanh',
  },
  {
    id: 'img-1',
    title: 'Nhiệt Huyết Sinh Viên HUCE',
    caption: 'Những nụ cười rạng rỡ của các chiến sĩ tình nguyện trên mọi nẻo đường',
    url: 'https://fit-huce.github.io/ttvf18/images/1.jpg',
    tag: 'Hoạt động',
  },
  {
    id: 'img-2',
    title: 'Gắn Kết & Đồng Đội',
    caption: 'Nơi giao lưu, học hỏi và hoàn thiện cả trong học tập lẫn kỹ năng sống',
    url: 'https://fit-huce.github.io/ttvf18/images/2.jpg',
    tag: 'Teambuilding',
  },
  {
    id: 'img-3',
    title: 'Cháy Hết Mình',
    caption: 'Mỗi cá nhân mang một bản sắc riêng cực kỳ cá tính và tài năng',
    url: 'https://fit-huce.github.io/ttvf18/images/3.jpg',
    tag: 'Sự kiện',
  },
  {
    id: 'img-4',
    title: 'Tinh Thần Kỷ Luật',
    caption: 'Một tập thể vững mạnh với tinh thần vượt khó, hoàn thành mọi mục tiêu',
    url: 'https://fit-huce.github.io/ttvf18/images/4.jpg',
    tag: 'Tập thể',
  },
  {
    id: 'img-5',
    title: 'Hành Trình Ý Nghĩa',
    caption: 'Những chuyến thiện nguyện mang lại giá trị tốt đẹp cho cộng đồng và xã hội',
    url: 'https://fit-huce.github.io/ttvf18/images/5.jpg',
    tag: 'Thiện nguyện',
  },
  {
    id: 'img-6',
    title: 'Khoảnh Khắc Đáng Nhớ',
    caption: 'Lưu giữ những kỷ niệm đẹp nhất của những năm tháng đại học',
    url: 'https://fit-huce.github.io/ttvf18/images/6.jpg',
    tag: 'Kỷ niệm',
  },
  {
    id: 'img-7',
    title: 'Thế Hệ Kế Thừa',
    caption: 'Chào đón các bạn Tân sinh viên - Những mảnh ghép tiếp theo của F20',
    url: 'https://fit-huce.github.io/ttvf18/images/7.jpg',
    tag: 'Thế hệ F20',
  },
];

// Timeline tuyển thành viên TTVF20
export const RECRUITMENT_TIMELINE: TimelineStep[] = [
  {
    step: 1,
    title: 'Vòng 1: Mở Đơn Đăng Ký Online',
    time: 'Đang diễn ra',
    description: 'Điền thông tin và chia sẻ nguyện vọng qua form trực tuyến chính thức của Đội.',
    status: 'current',
  },
  {
    step: 2,
    title: 'Vòng 2: Phỏng Vấn Trực Tiếp',
    time: 'Sau khi đóng đơn',
    description: 'Buổi trò chuyện thân mật giúp Đội hiểu rõ hơn về tính cách, đam mê và định hướng của bạn.',
    status: 'upcoming',
  },
  {
    step: 3,
    title: 'Vòng 3: Thử Thách & Trải Nghiệm',
    time: 'Giai đoạn tập sự',
    description: 'Cùng tham gia các hoạt động tập thể, làm quen đồng đội và trải nghiệm văn hóa Đội.',
    status: 'upcoming',
  },
  {
    step: 4,
    title: 'Vòng 4: Họp Mặt & Ra Mắt F20',
    time: 'Gala Chào đón',
    description: 'Chính thức khoác lên mình màu áo xanh tình nguyện và nhận thẻ CTV thế hệ F20!',
    status: 'upcoming',
  },
];
