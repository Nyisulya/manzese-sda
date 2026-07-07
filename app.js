/* ==========================================================================
   Manzese SDA Church - Core Script (Translation, Sabbath Timer, Hymns, Calc)
   ========================================================================== */

// 1. Language Translation Dictionary
const translations = {
    sw: {
        nav_sda: "Kanisa la Waadventista wa Sabato",
        nav_home: "Nyumbani",
        nav_about: "Kuhusu Sisi",
        nav_departments: "Idara",
        nav_quiz: "Chemsha Bongo",
        nav_giving: "Kutoa",
        nav_services: "Ratiba & Matukio",
        nav_contact: "Wasiliana Nasi",
        hero_tag: "Karibu Manzese SDA Church",
        hero_title: "Ibada ya Kweli, Upendo wa Kikristo & Matumaini ya Milele",
        hero_desc: "Sisi ni familia ya waumini wa kanisa la Waadventista wa Sabato Manzese, Dar es Salaam. Tunakualika ujiunge nasi katika kuabudu, kujifunza neno la Mungu, na kuhudumia jamii yetu.",
        btn_learn_more: "Fahamu Zaidi",
        btn_give: "Kutoa Zaka & Sadaka",
        sabbath_countdown_title: "Maandalizi ya Sabato",
        sabbath_starts_in: "Sabato inayofuata inaanza baada ya:",
        timer_days: "Siku",
        timer_hours: "Saa",
        timer_minutes: "Dakika",
        timer_seconds: "Sekunde",
        about_title: "Kuhusu Sisi",
        about_subtitle: "Jifunze historia, malengo na imani zetu za kipekee",
        about_who_we_are: "Sisi ni Akina Nani?",
        about_p1: "Kanisa la Waadventista wa Sabato Manzese ni jumuiya yenye uchangamfu iliyoko jijini Dar es Salaam, Tanzania. Kama sehemu ya kanisa la ulimwengu lote la Waadventista wa Sabato, tunaamini katika wokovu kupitia Yesu Kristo na tunasubiri kwa hamu kurudi kwake mara ya pili.",
        about_p2: "Tumejitolea kueneza ujumbe wa injili ya milele (Ujumbe wa Malaika Watatu wa Ufunuo 14) kwa kila mtu katika eneo letu na kote ulimwenguni kupitia upendo, huduma na elimu ya kiroho.",
        belief_bible: "Biblia Ndiyo Msingi",
        belief_bible_desc: "Tunaamini Biblia ni neno la Mungu lililoongozwa na roho.",
        belief_sabbath: "Sabato Takatifu",
        belief_sabbath_desc: "Tunatenga siku ya saba (Jumamosi) kwa ajili ya mapumziko na ibada.",
        leadership_title: "Uongozi wa Kanisa letu",
        role_pastor: "Mchungaji wa Mtaa",
        role_elder: "Mzee wa Kanisa Kiongozi",
        role_associate_elder: "Msaidizi wa Mzee wa Kanisa",
        dept_title: "Idara na Huduma",
        dept_subtitle: "Kila mtu ana nafasi ya kushiriki na kukua kiroho",
        tab_ss: "Shule ya Sabato",
        tab_youth: "Vijana (AY)",
        tab_choir: "Kwaya",
        tab_women: "Huduma za Akina Mama",
        dept_ss_title: "Idara ya Shule ya Sabato",
        dept_ss_desc1: "Shule ya Sabato ni \"moyo wa kanisa\". Ni muda wa asubuhi wa kujifunza Biblia katika vikundi vidogo, kujadiliana, na kuomba pamoja. Hapa waumini wote na wageni hushiriki kubadilishana mawazo kulingana na Kiongozi cha Kujifunza Biblia cha robo husika.",
        dept_ss_desc2: "Tuna madarasa ya watu wazima, vijana, na watoto wa rika zote ili kuhakikisha kila mtu anapata chakula cha kiroho kinachomfaa.",
        dept_youth_title: "Vijana wa Waadventista wa Sabato (AY)",
        dept_youth_desc1: "Idara ya Vijana (Adventist Youth - AY) inawawezesha vijana kukua kiroho, kimwili na kijamii. Kupitia mafunzo, mikutano, huduma za jamii, na michezo, vijana hujengewa misingi thabiti ya uongozi na kumjua Mungu.",
        dept_youth_desc2: "Pia tunajumuisha vilabu vya Pathfinders (Skauti) na Adventurers (Watafutaji) kwa ajili ya watoto na vijana wadogo kufundishwa nidhamu, stadi za maisha, na ucha Mungu.",
        dept_choir_title: "Huduma ya Uimbaji (Kwaya)",
        dept_choir_desc1: "Manzese SDA Church imebarikiwa kuwa na huduma ya uimbaji yenye nguvu. Tuna kwaya mbalimbali zinazomshukuru na kumtukuza Mungu kwa vipaji vyao vya sauti:",
        choir_kuu_title: "Kwaya Kuu",
        choir_kuu_desc: "Kwaya kuu ya kanisa inayoongoza katika ibada kubwa na matamasha ya uinjilisti ya kitaifa na kimataifa.",
        choir_youth_title: "Kwaya ya Vijana (AY Choir)",
        choir_youth_desc: "Inaundwa na vijana wenye shauku ya kumtumikia Mungu kwa nyimbo za kisasa na zenye kubariki vijana wenzao.",
        choir_evangelism_title: "Kwaya ya Uinjilisti",
        choir_evangelism_desc: "Kwaya inayolenga mikutano ya injili na huduma za nje ya kanisa ili kuvuta roho za watu kwa Kristo.",
        choir_children_title: "Kwaya ya Watoto (Adventist Children)",
        choir_children_desc: "Kwaya ya watoto wetu wadogo inayowajenga katika nidhamu na kukuza vipaji vyao vya uimbaji tangu wakiwa wadogo.",
        dept_women_title: "Huduma za Akina Mama (Women's Ministries)",
        dept_women_desc1: "Idara hii imeundwa kusaidia akina mama kukua kiroho, kusaidiana kiuchumi, kujenga familia imara za Kikristo na kuwahudumia wale walio katika shida (wajane, mayatima na wagonjwa).",
        dept_women_desc2: "Tunafanya semina za malezi, afya ya familia, na ujasiriamali ili kumwezesha mwanamke wa Kiadventista kuwa nguzo madhubuti katika jamii na kanisa.",
        quiz_title: "Chemsha Bongo ya Biblia",
        quiz_subtitle: "Pima uelewa wako wa Neno la Mungu kwa maswali haya mafupi",
        btn_next_question: "Swali Linalofuata",
        quiz_result_title: "Matokeo ya Jaribio",
        btn_restart_quiz: "Jaribu Tena",
        giving_title: "Kutoa Zaka na Sadaka",
        giving_subtitle: "\"Kila mtu na atoe kama alivyokusudia moyoni mwake...\" - 2 Wakorintho 9:7",
        calc_title: "Kikokotoo cha Zaka & Sadaka",
        calc_subtitle: "Hesabu kiasi chako kwa urahisi kabla ya kutuma",
        calc_income: "Kiasi cha Kipato (TSH)",
        calc_tithe: "Zaka (10%)",
        calc_offering: "Sadaka ya Shule ya Sabato (5%)",
        calc_combined: "Sadaka ya Maendeleo (5%)",
        calc_total: "Jumla Kuu (TSH)",
        pay_methods: "Njia za Malipo",
        pay_instruction: "Unaweza kurudisha Zaka na kutoa Sadaka kupitia Simu ya Mkononi (Lipa Namba) au moja kwa moja Benki:",
        pay_tab_mobile: "Simu ya Mkononi",
        pay_tab_bank: "Benki (CRDB)",
        pay_mpesa_label: "Lipa Namba (M-Pesa Voda)",
        pay_tigo_label: "Lipa Namba (Tigo Pesa)",
        pay_bank_acc: "Namba ya Akaunti",
        pay_bank_branch: "Tawi: Mwenge Branch",
        btn_copy: "Copy",
        services_title: "Ratiba na Matukio",
        services_subtitle: "Ungana nasi katika ibada na matukio ya kiroho wiki hii",
        weekly_schedule: "Ratiba ya Ibada za Wiki",
        day_saturday: "Jumamosi (Sabato)",
        sch_sabbath_title: "Ibada ya Sabato ya Ulimwengu Wote",
        sch_sabbath_desc: "Shule ya Sabato (08:00 - 10:30), Ibada Kuu (10:45 - 12:30), Programu ya Alasiri na AY (14:00 - 17:30).",
        day_wednesday: "Jumatano",
        sch_wed_title: "Ibada ya Kati ya Wiki (Maombi)",
        sch_wed_desc: "Muda maalum wa maombi, shuhuda, na kujifunza masomo ya unabii kwa undani.",
        day_friday: "Ijumaa",
        sch_fri_title: "Ibada ya Kusalimia Sabato (Vespers)",
        sch_fri_desc: "Kukaribisha masaa matakatifu ya Sabato kwa nyimbo, maombi na tafakari fupi.",
        upcoming_events: "Matukio Yajayo",
        month_aug: "AGO",
        event1_title: "Mkutano Mkuu wa Makambi (Camp Meeting)",
        event1_desc: "Ibada maalum ya juma zima yenye wageni wazungumzaji kutoka ndani na nje ya nchi. Karibu ubarikiwe!",
        month_sep: "SEP",
        event2_title: "Juma la Maombi la Vijana (AY Week)",
        event2_desc: "Mfululizo wa masomo maalum ya vijana yakilenga mahusiano, kiroho, afya, na uchumi wa kijana wa leo.",
        month_oct: "OKT",
        event3_title: "Siku ya Afya na Huduma za Jamii",
        event3_desc: "Upimaji wa afya bure, ushauri wa kitaalamu wa lishe na kutoa msaada kwa wagonjwa na wenye mahitaji maalum Manzese.",
        contact_title: "Wasiliana Nasi",
        contact_subtitle: "Kama una swali, maombi au unahitaji ushauri wa kiroho, wasiliana nasi wakati wowote",
        form_name: "Jina Lako",
        form_name_placeholder: "Ingiza jina lako...",
        form_email: "Barua Pepe",
        form_email_placeholder: "Ingiza barua pepe...",
        form_subject: "Mada",
        form_subject_placeholder: "Ingiza kichwa cha habari...",
        form_message: "Ujumbe Wako",
        form_message_placeholder: "Andika ujumbe wako hapa...",
        btn_send: "Tuma Ujumbe",
        toast_msg_success: "Ujumbe wako umetumwa kwa mafanikio! Tutawasiliana nawe hivi karibuni.",
        detail_location: "Mahali Tulipo",
        detail_address: "Manzese, Dar es Salaam (Karibu na Shule ya Msingi Manzese)",
        detail_phone: "Simu ya Mkononi",
        detail_email: "Barua Pepe",
        footer_desc: "Kanisa la Waadventista wa Sabato Manzese tunamwabudu Mungu wa kweli, tukiishi kwa upendo na kutangaza tumaini la kurudi kwa Kristo.",
        footer_quick_links: "Viungo vya Haraka",
        footer_follow_us: "Tufuatilie",
        footer_rights: "Haki zote zimehifadhiwa.",
        announcements_badge: "Matangazo",
        announce_1: "Mkutano Mkuu wa Makambi utaanza tarehe 16 Agosti. Karibuni wote!",
        announce_2: "Kikundi cha Maombi ya Asubuhi kinakutana kila Jumatano saa 11 Asubuhi.",
        announce_3: "Mazoezi ya Kwaya Kuu yatafanyika Ijumaa saa 11:30 Jioni kabla ya Vespers.",
        portal_title: "Huduma na Zana za Kiroho",
        portal_subtitle: "Gundua kurasa zetu za huduma, ratiba, zana za kutoa, na chemsha bongo ya Biblia",
        portal_about_desc: "Fahamu historia ya kanisa letu, malengo na imani zetu za msingi za Kiadventista, na viongozi wetu.",
        portal_link_read: "Soma Zaidi",
        portal_dept_desc: "Shule ya Sabato, Vijana (AY), Kwaya mbalimbali, na Huduma za Akina Mama wa kanisa letu.",
        portal_link_explore: "Gundua Idara",
        portal_services_desc: "Muda wa ibada zetu za wiki na Sabato kuu, na taarifa za matukio yote yanayokuja.",
        portal_link_view: "Angalia Ratiba",
        portal_giving_desc: "Kikokotoo cha zaka na sadaka, na njia mbalimbali salama za kutuma malipo (Simu na Benki).",
        portal_link_give: "Toa Sasa",
        portal_quiz_desc: "Pima na uboreshe ufahamu wako wa hadithi na mafundisho ya Biblia kwa maswali yetu mafupi.",
        portal_link_quiz: "Anza Jaribio",
        portal_contact_desc: "Tuma ombi la maombi ya kiroho, ushauri wa kichungaji au maswali yoyote kwa uongozi wa kanisa.",
        portal_link_contact: "Tuma Ujumbe",
        verse_text: "\"Basi, mkitafuta kwanza ufalme wake, na haki yake; na hayo yote mtaongezewa.\"",
        verse_ref: "Mathayo 6:33",
        pastor_badge: "Mchungaji wa Mtaa",
        pastor_welcome_title: "Karibu Katika Nyumba ya Bwana",
        pastor_quote: "\"Mungu anawapenda sana, na kanisa letu ni sehemu ambapo kila mtafutaji wa ukweli anaweza kupata familia, matumaini, na amani. Tunakukaribisha sana katika ibada zetu za Sabato na vipindi vyote vya juma.\"",
        faq_title: "Maswali Yanayoulizwa Mara kwa Mara",
        faq_q1: "Ibada zenu za Sabato huanza saa ngapi?",
        faq_a1: "Ibada huanza saa 2:00 Asubuhi kwa Shule ya Sabato (kujifunza Biblia) na kufuatiwa na Ibada Kuu ya Mahubiri saa 4:45 Asubuhi. Alasiri tuna vipindi vya vijana na kwaya kuanzia saa 8:00 Alasiri.",
        faq_q2: "Je, ninaweza kuhudhuria ikiwa mimi si mshiriki wa Sabato?",
        faq_a2: "Ndiyo, kabisa! Kanisa letu lipo wazi kwa ajili ya kila mtu wa dini, dhehebu au imani yoyote. Wageni wote wanakaribishwa na kufurahia upendo wa Kikristo pamoja nasi.",
        faq_q3: "Zaka na Sadaka zinatumika kwa kazi gani?",
        faq_a3: "Zaka na Sadaka zinatumika kusaidia kazi ya uinjilisti, matengenezo ya kanisa, kuendesha huduma mbalimbali za idara, na kutoa misaada kwa wajane, mayatima, wagonjwa na wenye shida Manzese.",
        poll_title: "Kura ya Maoni ya Kiroho",
        poll_question: "Ni somo gani ungependa kujifunza zaidi juma hili?",
        poll_opt1: "Unabii wa Danieli & Ufunuo",
        poll_opt2: "Jinsi ya Kuomba kwa Ushindi",
        poll_opt3: "Afya na Lishe ya Kikristo",
        poll_opt4: "Malezi na Afya ya Ndoa",
        poll_btn_reset: "Piga Kura Tena",
        btn_next_verse: "Neno Lingine ↻",
        location_title: "Mahali Tulipo",
        location_subtitle: "Karibu utufuate na kuabudu nasi Manzese, Dar es Salaam",
        btn_send_message: "Tuma Ujumbe",
        nav_gallery: "Picha",
        gallery_title: "Maktaba ya Picha",
        gallery_subtitle: "Tazama picha za matukio, ibada na huduma mbalimbali za kanisa letu",
        filter_all: "Yote",
        filter_worship: "Ibada",
        filter_departments: "Idara",
        filter_community: "Jamii",
        cap_church_ext: "Muonekano wa Nje wa Kanisa",
        cap_church_int: "Ibada Kuu ya Sabato Ndani ya Patakatifu",
        cap_choir: "Kwaya Kuu Ikiimba kwa Uthibitisho",
        cap_youth: "Vijana wa AY Katika Mkutano wa Kiroho",
        cap_community: "Pathfinders Wakisaidia Jamii Manzese",
        cap_children: "Watoto Wakijifunza Hadithi ya Biblia Shule ya Sabato"
    },
    en: {
        nav_sda: "Seventh-day Adventist Church",
        nav_home: "Home",
        nav_about: "About Us",
        nav_departments: "Departments",
        nav_quiz: "Bible Quiz",
        nav_giving: "Giving",
        nav_services: "Schedule & Events",
        nav_contact: "Contact Us",
        hero_tag: "Welcome to Manzese SDA Church",
        hero_title: "True Worship, Christian Love & Eternal Hope",
        hero_desc: "We are a family of believers at Manzese Seventh-day Adventist Church, Dar es Salaam. We welcome you to join us in worship, study of God's Word, and community service.",
        btn_learn_more: "Learn More",
        btn_give: "Tithe & Offerings",
        sabbath_countdown_title: "Sabbath Countdown",
        sabbath_starts_in: "The next Sabbath starts in:",
        timer_days: "Days",
        timer_hours: "Hours",
        timer_minutes: "Minutes",
        timer_seconds: "Seconds",
        about_title: "About Us",
        about_subtitle: "Learn about our history, mission, and fundamental beliefs",
        about_who_we_are: "Who Are We?",
        about_p1: "Manzese Seventh-day Adventist Church is a vibrant community located in Dar es Salaam, Tanzania. As part of the worldwide Seventh-day Adventist Church, we believe in salvation through Jesus Christ and eagerly anticipate His second return.",
        about_p2: "We are committed to sharing the everlasting gospel (the Three Angels' Messages of Revelation 14) with everyone in our neighborhood and beyond through love, ministry, and spiritual development.",
        belief_bible: "Bible-Based Foundation",
        belief_bible_desc: "We believe the Bible is the inspired and authoritative word of God.",
        belief_sabbath: "Holy Sabbath",
        belief_sabbath_desc: "We observe the seventh day (Saturday) as a holy day of rest and worship.",
        leadership_title: "Our Church Leadership",
        role_pastor: "District Pastor",
        role_elder: "First Church Elder",
        role_associate_elder: "Associate Church Elder",
        dept_title: "Departments & Ministries",
        dept_subtitle: "There is a place for everyone to serve and grow spiritually",
        tab_ss: "Sabbath School",
        tab_youth: "Youth Ministry (AY)",
        tab_choir: "Choir Ministry",
        tab_women: "Women's Ministries",
        dept_ss_title: "Sabbath School Department",
        dept_ss_desc1: "The Sabbath School is the 'heart of the church'. It is a morning session dedicated to small group Bible study, sharing, and prayer. Here, members and visitors discuss lessons based on the quarterly study guide.",
        dept_ss_desc2: "We have separate classes for adults, youth, and children of all ages to ensure tailored spiritual nourishment.",
        dept_youth_title: "SDA Youth Ministries (AY)",
        dept_youth_desc1: "The Adventist Youth (AY) department empowers young people to grow spiritually, physically, and socially. Through training, fellowship, outreach, and recreation, youth build leadership skills and a strong faith.",
        dept_youth_desc2: "We also run Pathfinder and Adventurer clubs for children and juniors, focusing on discipline, life skills, and Christian character.",
        dept_choir_title: "Music & Choirs Ministry",
        dept_choir_desc1: "Manzese SDA Church is blessed with a powerful music ministry. We have various choirs that thank and glorify God with their vocal talents:",
        choir_kuu_title: "Main Choir (Kwaya Kuu)",
        choir_kuu_desc: "The main church choir leading in divine services, and prominent national and international evangelistic concerts.",
        choir_youth_title: "Youth Choir (AY Choir)",
        choir_youth_desc: "Composed of passionate young people serving God through contemporary and uplifting choral songs.",
        choir_evangelism_title: "Evangelism Choir",
        choir_evangelism_desc: "Focuses on camp meetings, revivals, and community outreach campaigns to draw souls to Christ.",
        choir_children_title: "Children's Choir (Adventist Children)",
        choir_children_desc: "Our children's choir nurturing young ones in Christian character and vocal performance from an early age.",
        dept_women_title: "Women's Ministries",
        dept_women_desc1: "This department is designed to support women in their spiritual growth, economic cooperation, building strong Christian families, and serving those in need (widows, orphans, and the sick).",
        dept_women_desc2: "We conduct parenting, family health, and entrepreneurship seminars to empower Adventist women in the church and society.",
        quiz_title: "Bible Quiz",
        quiz_subtitle: "Test your knowledge of the Word of God with this quick quiz",
        btn_next_question: "Next Question",
        quiz_result_title: "Quiz Results",
        btn_restart_quiz: "Try Again",
        giving_title: "Tithe and Offerings",
        giving_subtitle: "\"Each of you should give what you have decided in your heart to give...\" - 2 Corinthians 9:7",
        calc_title: "Tithe & Offerings Calculator",
        calc_subtitle: "Easily calculate your giving amount before sending",
        calc_income: "Income Amount (TSH)",
        calc_tithe: "Tithe (10%)",
        calc_offering: "Sabbath School Offering (5%)",
        calc_combined: "Development Offering (5%)",
        calc_total: "Grand Total (TSH)",
        pay_methods: "Payment Methods",
        pay_instruction: "You can return your Tithe and give Offerings via Mobile Money (Lipa Namba) or Bank Transfer:",
        pay_tab_mobile: "Mobile Money",
        pay_tab_bank: "Bank Transfer (CRDB)",
        pay_mpesa_label: "Lipa Namba (M-Pesa Voda)",
        pay_tigo_label: "Lipa Namba (Tigo Pesa)",
        pay_bank_acc: "Account Number",
        pay_bank_branch: "Branch: Mwenge Branch",
        btn_copy: "Copy",
        services_title: "Schedule & Events",
        services_subtitle: "Join us in worship and spiritual fellowship this week",
        weekly_schedule: "Weekly Worship Schedule",
        day_saturday: "Saturday (Sabbath)",
        sch_sabbath_title: "Worldwide Sabbath Service",
        sch_sabbath_desc: "Sabbath School (08:00 AM - 10:30 AM), Divine Worship (10:45 AM - 12:30 PM), Afternoon Youth / AY Program (02:00 PM - 05:30 PM).",
        day_wednesday: "Wednesday",
        sch_wed_title: "Mid-Week Prayer Meeting",
        sch_wed_desc: "A special time for prayers, personal testimonies, and in-depth study of prophecy scriptures.",
        day_friday: "Friday",
        sch_fri_title: "Sabbath Vesper Service",
        sch_fri_desc: "Welcoming the holy hours of the Sabbath with songs, prayers, and a short devotional.",
        upcoming_events: "Upcoming Events",
        month_aug: "AUG",
        event1_title: "Annual Camp Meeting",
        event1_desc: "A week-long special worship service featuring guest speakers from inside and outside the country. Welcome all!",
        month_sep: "SEP",
        event2_title: "Adventist Youth Week of Prayer",
        event2_desc: "A series of youth services addressing relationships, faith, health, and financial literacy for today's Christian youth.",
        month_oct: "OCT",
        event3_title: "Health & Community Service Day",
        event3_desc: "Free health screenings, professional nutrition counseling, and distributing care packages to those in need in Manzese.",
        contact_title: "Contact Us",
        contact_subtitle: "If you have any questions, prayer requests, or need counseling, feel free to reach out to us",
        form_name: "Your Name",
        form_name_placeholder: "Enter your name...",
        form_email: "Email Address",
        form_email_placeholder: "Enter email address...",
        form_subject: "Subject",
        form_subject_placeholder: "Enter subject title...",
        form_message: "Your Message",
        form_message_placeholder: "Write your message here...",
        btn_send: "Send Message",
        toast_msg_success: "Your message has been sent successfully! We will contact you soon.",
        detail_location: "Our Location",
        detail_address: "Manzese, Dar es Salaam (Near Manzese Primary School)",
        detail_phone: "Mobile Phone",
        detail_email: "Email Address",
        footer_desc: "Manzese Seventh-day Adventist Church is dedicated to worshiping the true God, living in Christian love, and proclaiming the hope of Christ's return.",
        footer_quick_links: "Quick Links",
        footer_follow_us: "Follow Us",
        footer_rights: "All rights reserved.",
        announcements_badge: "Announcements",
        announce_1: "The Annual Camp Meeting will start on August 16th. All are welcome!",
        announce_2: "Morning Prayer Cell meets every Wednesday at 5:00 AM.",
        announce_3: "Main Choir rehearsals are held on Fridays at 5:30 PM before Vespers.",
        portal_title: "Ministries & Spiritual Tools",
        portal_subtitle: "Explore our ministry portals, service schedules, giving calculators, and Bible quiz game",
        portal_about_desc: "Discover our church history, core Adventist beliefs, and leadership team.",
        portal_link_read: "Read More",
        portal_dept_desc: "Sabbath School, Youth (AY), multiple choirs, and Women's Ministries of our church.",
        portal_link_explore: "Explore Departments",
        portal_services_desc: "Worship times for mid-week and main Sabbath services, plus upcoming events list.",
        portal_link_view: "View Schedule",
        portal_giving_desc: "Tithe and offerings calculator, and secure mobile/bank transfer instructions.",
        portal_link_give: "Give Now",
        portal_quiz_desc: "Test and grow your knowledge of Bible stories and doctrines through our interactive quiz.",
        portal_link_quiz: "Start Quiz",
        portal_contact_desc: "Submit prayer requests, pastoral counseling requests, or general inquiries to leaders.",
        portal_link_contact: "Send Message",
        verse_text: "\"But seek first the kingdom of God and his righteousness, and all these things will be added to you.\"",
        verse_ref: "Matthew 6:33",
        pastor_badge: "District Pastor",
        pastor_welcome_title: "Welcome to the House of the Lord",
        pastor_quote: "\"God loves you deeply, and our church is a place where every truth-seeker can find a family, hope, and peace. We warmly welcome you to our Sabbath worship and all mid-week services.\"",
        faq_title: "Frequently Asked Questions",
        faq_q1: "What time do your Sabbath services start?",
        faq_a1: "Services begin at 8:00 AM with Sabbath School (Bible study groups), followed by the Divine Service at 10:45 AM. In the afternoon, we have youth services and choir sessions starting at 2:00 PM.",
        faq_q2: "Can I attend if I am not a Sabbath member?",
        faq_a2: "Yes, absolutely! Our church is open to everyone of any religion, denomination, or belief system. All visitors are welcome to experience Christian love and fellowship with us.",
        faq_q3: "What are Tithe and Offerings used for?",
        faq_a3: "Tithe and Offerings are used to support evangelism work, church maintenance, run departmental activities, and provide welfare support for widows, orphans, the sick, and those in need in Manzese.",
        poll_title: "Weekly Spiritual Poll",
        poll_question: "Which topic would you like to study more this week?",
        poll_opt1: "Prophecy of Daniel & Revelation",
        poll_opt2: "How to Pray for Victory",
        poll_opt3: "Christian Health & Nutrition",
        poll_opt4: "Parenting & Marriage Health",
        poll_btn_reset: "Vote Again",
        btn_next_verse: "Another Verse ↻",
        location_title: "Our Location",
        location_subtitle: "Welcome to join us for worship at Manzese, Dar es Salaam",
        btn_send_message: "Send Message",
        nav_gallery: "Gallery",
        gallery_title: "Photo Gallery",
        gallery_subtitle: "Browse photos of events, worship services, and various ministries of our church",
        filter_all: "All",
        filter_worship: "Worship",
        filter_departments: "Departments",
        filter_community: "Community",
        cap_church_ext: "Church Exterior View",
        cap_church_int: "Main Sabbath Service Inside the Sanctuary",
        cap_choir: "Main Choir Ministering in Song",
        cap_youth: "AY Youth Members in Fellowship",
        cap_community: "Pathfinders Distributing Aid in Manzese",
        cap_children: "Children Learning Bible Stories in Sabbath School"
    }
};

let currentLang = localStorage.getItem('selectedLanguage') || 'sw'; // Default language from localStorage or Swahili

// 2. Nyimbo za Kristo (Hymn Book) Database (Swahili SDA Hymnal)
// 2. Bible Quiz Questions Database
// 2. Bible Quiz Questions Database (Pool of 15 Questions)
const quizQuestionsPool = [
    {
        id: 1,
        question: {
            sw: "Ni nani aliyemlisha nabii Eliya kwa kutumia kunguru wakati wa ukame?",
            en: "Who fed the prophet Elijah using ravens during the drought?"
        },
        options: [
            { text: { sw: "Bwana (Mungu)", en: "The Lord (God)" }, isCorrect: true },
            { text: { sw: "Yezebeli", en: "Jezebel" }, isCorrect: false },
            { text: { sw: "Obadia", en: "Obadiah" }, isCorrect: false },
            { text: { sw: "Ahabu", en: "Ahab" }, isCorrect: false }
        ]
    },
    {
        id: 2,
        question: {
            sw: "Siku ya saba ya juma (Sabato ya Bwana) ilibarikiwa na kutakaswa lini?",
            en: "When was the seventh day (the Sabbath of the Lord) blessed and sanctified?"
        },
        options: [
            { text: { sw: "Wakati wa Uumbaji", en: "At Creation" }, isCorrect: true },
            { text: { sw: "Kwenye Mlima Sinai", en: "At Mount Sinai" }, isCorrect: false },
            { text: { sw: "Wakati wa Nuhu", en: "During Noah's time" }, isCorrect: false },
            { text: { sw: "Katika Agano Jipya", en: "In the New Testament" }, isCorrect: false }
        ]
    },
    {
        id: 3,
        question: {
            sw: "Mji gani ambao kuta zake zilianguka baada ya wana wa Israeli kuuzunguka kwa siku saba?",
            en: "Which city's walls collapsed after the Israelites marched around it for seven days?"
        },
        options: [
            { text: { sw: "Yeriko", en: "Jericho" }, isCorrect: true },
            { text: { sw: "Babeli", en: "Babylon" }, isCorrect: false },
            { text: { sw: "Sodoma", en: "Sodom" }, isCorrect: false },
            { text: { sw: "Ninawi", en: "Nineveh" }, isCorrect: false }
        ]
    },
    {
        id: 4,
        question: {
            sw: "Ni mtume yupi aliyeandika maneno yafuatayo: 'Upendo huvumilia, hufadhili; upendo hauhusudu...'?",
            en: "Which apostle wrote: 'Love is patient, love is kind. It does not envy...'?"
        },
        options: [
            { text: { sw: "Paulo", en: "Paul" }, isCorrect: true },
            { text: { sw: "Yohana", en: "John" }, isCorrect: false },
            { text: { sw: "Petro", en: "Peter" }, isCorrect: false },
            { text: { sw: "Yakobo", en: "James" }, isCorrect: false }
        ]
    },
    {
        id: 5,
        question: {
            sw: "Kitabu cha mwisho cha Agano la Kale katika Biblia ni kipi?",
            en: "What is the final book of the Old Testament in the Bible?"
        },
        options: [
            { text: { sw: "Malaki", en: "Malachi" }, isCorrect: true },
            { text: { sw: "Ufunuo", en: "Revelation" }, isCorrect: false },
            { text: { sw: "Isaya", en: "Isaiah" }, isCorrect: false },
            { text: { sw: "Mwanzo", en: "Genesis" }, isCorrect: false }
        ]
    },
    {
        id: 6,
        question: {
            sw: "Safina ya Nuhu ilitua juu ya milima gani gharika ilipoisha?",
            en: "Noah's ark came to rest on which mountains after the flood?"
        },
        options: [
            { text: { sw: "Milima ya Ararati", en: "Mountains of Ararat" }, isCorrect: true },
            { text: { sw: "Mlima Sinai", en: "Mount Sinai" }, isCorrect: false },
            { text: { sw: "Mlima Nebo", en: "Mount Nebo" }, isCorrect: false },
            { text: { sw: "Mlima wa Mizeituni", en: "Mount of Olives" }, isCorrect: false }
        ]
    },
    {
        id: 7,
        question: {
            sw: "Mji gani alikozaliwa Mwokozi Yesu Kristo?",
            en: "In which town was the Savior Jesus Christ born?"
        },
        options: [
            { text: { sw: "Bethlehemu", en: "Bethlehem" }, isCorrect: true },
            { text: { sw: "Nazareti", en: "Nazareth" }, isCorrect: false },
            { text: { sw: "Yerusalemu", en: "Jerusalem" }, isCorrect: false },
            { text: { sw: "Yeriko", en: "Jericho" }, isCorrect: false }
        ]
    },
    {
        id: 8,
        question: {
            sw: "Ni nani aliyemezwa na samaki mkubwa baada ya kujaribu kukimbia huduma ya Mungu?",
            en: "Who was swallowed by a great fish after trying to flee from God's mission?"
        },
        options: [
            { text: { sw: "Yona", en: "Jonah" }, isCorrect: true },
            { text: { sw: "Danieli", en: "Daniel" }, isCorrect: false },
            { text: { sw: "Musa", en: "Moses" }, isCorrect: false },
            { text: { sw: "Samsoni", en: "Samson" }, isCorrect: false }
        ]
    },
    {
        id: 9,
        question: {
            sw: "Ni mlango (sura) upi ulio mrefu zaidi katika Biblia nzima?",
            en: "Which is the longest chapter in the entire Bible?"
        },
        options: [
            { text: { sw: "Zaburi 119", en: "Psalm 119" }, isCorrect: true },
            { text: { sw: "Zaburi 23", en: "Psalm 23" }, isCorrect: false },
            { text: { sw: "Mwanzo 1", en: "Genesis 1" }, isCorrect: false },
            { text: { sw: "Isaya 53", en: "Isaiah 53" }, isCorrect: false }
        ]
    },
    {
        id: 10,
        question: {
            sw: "Ni nani aliyekuwa shahidi wa kwanza (martyr) wa kanisa la kwanza la Kikristo kuuawa kwa ajili ya imani?",
            en: "Who was the first martyr of the early Christian church to be killed for his faith?"
        },
        options: [
            { text: { sw: "Stefano", en: "Stephen" }, isCorrect: true },
            { text: { sw: "Yakobo", en: "James" }, isCorrect: false },
            { text: { sw: "Filipo", en: "Philip" }, isCorrect: false },
            { text: { sw: "Petro", en: "Peter" }, isCorrect: false }
        ]
    },
    {
        id: 11,
        question: {
            sw: "Mvua ilinyesha kwa muda gani wakati wa gharika kuu ya Nuhu?",
            en: "How long did it rain during Noah's great flood?"
        },
        options: [
            { text: { sw: "Siku 40 na usiku 40", en: "40 days and 40 nights" }, isCorrect: true },
            { text: { sw: "Siku 7 na usiku 7", en: "7 days and 7 nights" }, isCorrect: false },
            { text: { sw: "Siku 120", en: "120 days" }, isCorrect: false },
            { text: { sw: "Siku 10 na usiku 10", en: "10 days and 10 nights" }, isCorrect: false }
        ]
    },
    {
        id: 12,
        question: {
            sw: "Ni mwanafunzi yupi aliyemkana Yesu mara tatu kabla ya jogoo kuwika?",
            en: "Which disciple denied Jesus three times before the rooster crowed?"
        },
        options: [
            { text: { sw: "Petro", en: "Peter" }, isCorrect: true },
            { text: { sw: "Yuda Iskariote", en: "Judas Iscariot" }, isCorrect: false },
            { text: { sw: "Tomaso", en: "Thomas" }, isCorrect: false },
            { text: { sw: "Yohana", en: "John" }, isCorrect: false }
        ]
    },
    {
        id: 13,
        question: {
            sw: "Mungu alitumia nini kumuumba Hawa (mwanamke wa kwanza)?",
            en: "What did God use to create Eve (the first woman)?"
        },
        options: [
            { text: { sw: "Ubavu wa Adamu", en: "Adam's rib" }, isCorrect: true },
            { text: { sw: "Mavumbi ya nchi", en: "Dust of the ground" }, isCorrect: false },
            { text: { sw: "Pumzi ya uzima", en: "Breath of life" }, isCorrect: false },
            { text: { sw: "Neno la uumbaji tu", en: "Creative word alone" }, isCorrect: false }
        ]
    },
    {
        id: 14,
        question: {
            sw: "Ni nani aliyekabidhiwa Amri Kumi za Mungu kwenye Mlima Sinai?",
            en: "Who was given the Ten Commandments of God on Mount Sinai?"
        },
        options: [
            { text: { sw: "Musa", en: "Moses" }, isCorrect: true },
            { text: { sw: "Haruni", en: "Aaron" }, isCorrect: false },
            { text: { sw: "Joshua", en: "Joshua" }, isCorrect: false },
            { text: { sw: "Ibrahimu", en: "Abraham" }, isCorrect: false }
        ]
    },
    {
        id: 15,
        question: {
            sw: "Ni nani aliyekuwa mfalme mdogo zaidi wa Yuda kutawala (alianza akiwa na umri wa miaka saba)?",
            en: "Who was the youngest king of Judah to reign (began reigning at age seven)?"
        },
        options: [
            { text: { sw: "Yoashi", en: "Joash" }, isCorrect: true },
            { text: { sw: "Yosia", en: "Josiah" }, isCorrect: false },
            { text: { sw: "Daudi", en: "David" }, isCorrect: false },
            { text: { sw: "Solomoni", en: "Solomon" }, isCorrect: false }
        ]
    }
];

// 3. Document Ready Initialization
document.addEventListener("DOMContentLoaded", () => {
    // Current Year Footer
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Setup Functions
    setupHeaderScroll();
    setupMobileMenu();
    setupLanguageSwitcher(); // Translates on load
    
    // Page-specific setup runs conditionally
    if (document.getElementById("sabbathCardTitle")) setupSabbathCountdown();
    if (document.getElementById("quizCard")) setupBibleQuiz();
    if (document.getElementById("incomeInput")) setupTitheCalculator();
    if (document.querySelector(".pay-tab-btn")) setupPaymentTabs();
    if (document.getElementById("contactForm")) setupContactForm();
    if (document.querySelector(".dept-tab-btn")) setupDepartmentTabs();
    if (document.getElementById("nextVerseBtn")) setupInteractiveVerses();
    if (document.querySelector(".faq-trigger")) setupFaqAccordion();
    if (document.getElementById("spiritualPollCard")) setupSpiritualPoll();
    if (document.querySelector(".gallery-filter-btn")) setupGallery();
    
    // Active Navigation highlighting based on current path
    setupNavigationHighlight();
});

// 4. Sticky Header Logic
function setupHeaderScroll() {
    const header = document.querySelector(".main-header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
}

// 5. Mobile Menu Hamburger Logic
function setupMobileMenu() {
    const menuToggle = document.getElementById("menuToggle");
    const mobilePanel = document.getElementById("mobileNavPanel");
    const mobileNavLinks = document.querySelectorAll(".mobile-nav-item");

    menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("open");
        mobilePanel.classList.toggle("open");
    });

    mobileNavLinks.forEach(link => {
        link.addEventListener("click", () => {
            menuToggle.classList.remove("open");
            mobilePanel.classList.remove("open");
        });
    });
}

// 6. Language Switcher Logic
function setupLanguageSwitcher() {
    const langBtn = document.getElementById("langBtn");
    const langText = document.getElementById("langText");
    if (!langBtn || !langText) return;

    langText.textContent = currentLang === 'sw' ? 'ENGLISH' : 'SWAHILI';
    updateDOMTranslation();
    setTimeout(() => {
        window.dispatchEvent(new Event('languageChanged'));
    }, 50);

    langBtn.addEventListener("click", () => {
        currentLang = currentLang === 'sw' ? 'en' : 'sw';
        localStorage.setItem('selectedLanguage', currentLang);
        langText.textContent = currentLang === 'sw' ? 'ENGLISH' : 'SWAHILI';
        updateDOMTranslation();
        window.dispatchEvent(new Event('languageChanged'));
        
        setupSabbathCountdown(); 
        calculateTithe();
        setupBibleQuiz();
    });
}

function updateDOMTranslation() {
    const elementsToTranslate = document.querySelectorAll("[data-translate]");
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute("data-translate");
        if (translations[currentLang] && translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });

    // Translate Placeholders
    const inputsToTranslate = document.querySelectorAll("[data-translate-placeholder]");
    inputsToTranslate.forEach(input => {
        const key = input.getAttribute("data-translate-placeholder");
        if (translations[currentLang] && translations[currentLang][key]) {
            input.placeholder = translations[currentLang][key];
        }
    });
}

// 7. Sabbath Countdown Timer Logic
let sabbathInterval;
function setupSabbathCountdown() {
    clearInterval(sabbathInterval);
    const cardTitle = document.getElementById("sabbathCardTitle");
    const cardBody = document.getElementById("sabbathCardBody");
    if (!cardTitle || !cardBody) return;

    function updateTimer() {
        const now = new Date();
        const currentDay = now.getDay(); // 0: Sunday, 5: Friday, 6: Saturday
        const currentHour = now.getHours();

        // Check if currently Sabbath: Friday 6 PM (18:00) to Saturday 6 PM (18:00)
        let isSabbath = false;
        if (currentDay === 5 && currentHour >= 18) {
            isSabbath = true;
        } else if (currentDay === 6 && currentHour < 18) {
            isSabbath = true;
        }

        if (isSabbath) {
            // Render Happy Sabbath state
            cardTitle.textContent = currentLang === 'sw' ? "Sabato Takatifu" : "Holy Sabbath";
            cardBody.innerHTML = `
                <div class="happy-sabbath">
                    <h2 class="happy-sabbath-title">Sabato Njema!</h2>
                    <p class="happy-sabbath-verse">
                        ${currentLang === 'sw' 
                          ? '"Kumbuka siku ya Sabato uitakase. Siku sita utafanya kazi, utafanya mambo yako yote; lakini siku ya saba ni Sabato ya Bwana, Mungu wako..." - Kutoka 20:8-10'
                          : '"Remember the Sabbath day, to keep it holy. Six days you shall labor and do all your work, but the seventh day is the Sabbath of the Lord your God..." - Exodus 20:8-10'}
                    </p>
                </div>
            `;
        } else {
            // Calculate next Sabbath: coming Friday at 18:00 (6 PM)
            let targetSabbath = new Date();
            let daysUntilFriday = (5 - currentDay + 7) % 7;
            
            // If today is Friday before 18:00, daysUntilFriday is 0.
            // If today is Friday after 18:00, next Friday is in 7 days.
            if (currentDay === 5 && currentHour >= 18) {
                daysUntilFriday = 7;
            }
            // If today is Saturday after 18:00, next Friday is in 6 days.
            if (currentDay === 6 && currentHour >= 18) {
                daysUntilFriday = 6;
            }

            targetSabbath.setDate(now.getDate() + daysUntilFriday);
            targetSabbath.setHours(18, 0, 0, 0); // 6:00 PM

            const diffMs = targetSabbath - now;
            
            const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);

            // Set countdown HTML
            cardTitle.textContent = translations[currentLang]["sabbath_countdown_title"];
            cardBody.innerHTML = `
                <p class="sabbath-prompt" id="sabbathPrompt">${translations[currentLang]["sabbath_starts_in"]}</p>
                <div class="countdown-timer" id="countdownTimer">
                    <div class="timer-item">
                        <span class="timer-num" id="days">${String(days).padStart(2, '0')}</span>
                        <span class="timer-label">${translations[currentLang]["timer_days"]}</span>
                    </div>
                    <div class="timer-item">
                        <span class="timer-num" id="hours">${String(hours).padStart(2, '0')}</span>
                        <span class="timer-label">${translations[currentLang]["timer_hours"]}</span>
                    </div>
                    <div class="timer-item">
                        <span class="timer-num" id="minutes">${String(minutes).padStart(2, '0')}</span>
                        <span class="timer-label">${translations[currentLang]["timer_minutes"]}</span>
                    </div>
                    <div class="timer-item">
                        <span class="timer-num" id="seconds">${String(seconds).padStart(2, '0')}</span>
                        <span class="timer-label">${translations[currentLang]["timer_seconds"]}</span>
                    </div>
                </div>
            `;
        }
    }

    updateTimer();
    sabbathInterval = setInterval(updateTimer, 1000);
}

// 8. Department Tabs Logic
function setupDepartmentTabs() {
    const tabButtons = document.querySelectorAll(".dept-tab-btn");
    const tabPanes = document.querySelectorAll(".dept-content-pane");

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            const targetTab = button.getAttribute("data-tab");

            // Deactivate all
            tabButtons.forEach(btn => btn.classList.remove("active"));
            tabPanes.forEach(pane => pane.classList.remove("active"));

            // Activate current
            button.classList.add("active");
            document.getElementById(targetTab).classList.add("active");
        });
    });
}

// 9. Bible Quiz Logic
let currentQuizQuestions = [];
let currentQuestionIndex = 0;
let quizScore = 0;
let hasAnswered = false;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function setupBibleQuiz() {
    if (!document.getElementById("quizCard")) {
        return; // Exit early if not on the quiz page
    }
    currentQuestionIndex = 0;
    quizScore = 0;
    hasAnswered = false;
    
    // Deep clone the questions pool so we don't disrupt the base data
    const questionsCopy = quizQuestionsPool.map(q => ({
        id: q.id,
        question: { ...q.question },
        options: q.options.map(opt => ({
            text: { ...opt.text },
            isCorrect: opt.isCorrect
        }))
    }));
    
    // Shuffle and pick 5 random questions
    shuffleArray(questionsCopy);
    currentQuizQuestions = questionsCopy.slice(0, 5);
    
    // Shuffle the options of each selected question
    currentQuizQuestions.forEach(q => {
        shuffleArray(q.options);
    });

    const quizCard = document.getElementById("quizCard");
    const quizResultCard = document.getElementById("quizResultCard");
    const nextBtn = document.getElementById("quizNextBtn");
    const restartBtn = document.getElementById("quizRestartBtn");

    if (quizCard) quizCard.classList.remove("hidden");
    if (quizResultCard) quizResultCard.classList.add("hidden");
    if (nextBtn) {
        nextBtn.disabled = true;
        nextBtn.textContent = translations[currentLang]["btn_next_question"];
    }

    renderQuestion();

    if (nextBtn && !nextBtn.dataset.listener) {
        nextBtn.addEventListener("click", () => {
            currentQuestionIndex++;
            if (currentQuestionIndex < currentQuizQuestions.length) {
                renderQuestion();
            } else {
                showQuizResults();
            }
        });
        nextBtn.dataset.listener = "true";
    }

    if (restartBtn && !restartBtn.dataset.listener) {
        restartBtn.addEventListener("click", () => {
            setupBibleQuiz();
        });
        restartBtn.dataset.listener = "true";
    }
}

function renderQuestion() {
    hasAnswered = false;
    const question = currentQuizQuestions[currentQuestionIndex];
    
    // Counter & Score Badge
    const counterText = currentLang === 'sw' 
        ? `Swali ${currentQuestionIndex + 1} kati ya ${currentQuizQuestions.length}`
        : `Question ${currentQuestionIndex + 1} of ${currentQuizQuestions.length}`;
    document.getElementById("quizCounter").textContent = counterText;
    
    const scoreText = currentLang === 'sw'
        ? `Alama: ${quizScore}/${currentQuizQuestions.length}`
        : `Score: ${quizScore}/${currentQuizQuestions.length}`;
    document.getElementById("quizScoreBadge").textContent = scoreText;

    // Progress Bar
    const percent = ((currentQuestionIndex) / currentQuizQuestions.length) * 100;
    document.getElementById("quizProgressBar").style.width = `${percent}%`;

    // Question text
    document.getElementById("quizQuestionText").textContent = question.question[currentLang];

    // Options Container
    const optionsContainer = document.getElementById("quizOptionsContainer");
    optionsContainer.innerHTML = "";

    const nextBtn = document.getElementById("quizNextBtn");
    nextBtn.disabled = true;

    question.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.className = "quiz-option-btn";
        btn.innerHTML = `
            <span>${option.text[currentLang]}</span>
            <span class="quiz-option-icon" id="opt-icon-${index}"></span>
        `;
        
        btn.addEventListener("click", () => {
            if (hasAnswered) return;
            hasAnswered = true;
            
            const isCorrect = option.isCorrect;
            const buttons = optionsContainer.querySelectorAll(".quiz-option-btn");
            
            buttons.forEach((b, idx) => {
                b.disabled = true;
                const optObj = question.options[idx];
                if (optObj.isCorrect) {
                    b.classList.add("correct");
                    document.getElementById(`opt-icon-${idx}`).textContent = "✓";
                }
            });

            if (isCorrect) {
                quizScore++;
                const newScoreText = currentLang === 'sw'
                    ? `Alama: ${quizScore}/${currentQuizQuestions.length}`
                    : `Score: ${quizScore}/${currentQuizQuestions.length}`;
                document.getElementById("quizScoreBadge").textContent = newScoreText;
            } else {
                btn.classList.add("incorrect");
                document.getElementById(`opt-icon-${index}`).textContent = "✗";
            }

            nextBtn.disabled = false;
        });

        optionsContainer.appendChild(btn);
    });
}

function showQuizResults() {
    document.getElementById("quizProgressBar").style.width = "100%";

    const quizCard = document.getElementById("quizCard");
    const quizResultCard = document.getElementById("quizResultCard");
    
    if (quizCard) quizCard.classList.add("hidden");
    if (quizResultCard) quizResultCard.classList.remove("hidden");

    const finalScoreText = currentLang === 'sw'
        ? `Ulipata alama ${quizScore} kati ya ${currentQuizQuestions.length}`
        : `You scored ${quizScore} out of ${currentQuizQuestions.length}`;
    document.getElementById("quizFinalScore").textContent = finalScoreText;

    let feedback = "";
    if (currentLang === 'sw') {
        if (quizScore === 5) {
            feedback = "Kazi nzuri ajabu! Wewe ni hodari katika Neno la Mungu!";
        } else if (quizScore >= 3) {
            feedback = "Kazi nzuri sana! Unalijua Neno la Mungu vyema.";
        } else {
            feedback = "Usikate tamaa. Endelea kusoma Biblia kila siku ili ukue kiroho!";
        }
    } else {
        if (quizScore === 5) {
            feedback = "Excellent job! You are truly a scholar of God's Word!";
        } else if (quizScore >= 3) {
            feedback = "Great job! You know your Bible well.";
        } else {
            feedback = "Don't give up! Keep reading the Bible daily to grow in knowledge.";
        }
    }
    document.getElementById("quizFeedbackText").textContent = feedback;
}

// 10. Tithe and Offerings Calculator Logic
function setupTitheCalculator() {
    const incomeInput = document.getElementById("incomeInput");
    if (!incomeInput) return;
    incomeInput.addEventListener("input", calculateTithe);
}

function calculateTithe() {
    const incomeInput = document.getElementById("incomeInput");
    const titheValue = document.getElementById("titheValue");
    const offeringValue = document.getElementById("offeringValue");
    const combinedValue = document.getElementById("combinedValue");
    const totalValue = document.getElementById("totalValue");
    if (!incomeInput || !titheValue) return;

    const val = parseFloat(incomeInput.value) || 0;
    
    const tithe = val * 0.10;
    const offering = val * 0.05;
    const combined = val * 0.05;
    const grandTotal = tithe + offering + combined;

    titheValue.textContent = formatCurrency(tithe) + " TSH";
    offeringValue.textContent = formatCurrency(offering) + " TSH";
    combinedValue.textContent = formatCurrency(combined) + " TSH";
    totalValue.textContent = formatCurrency(grandTotal) + " TSH";
}

function formatCurrency(amount) {
    return amount.toLocaleString(currentLang === 'sw' ? 'sw-TZ' : 'en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
}

// 11. Payment Tab System & Clipboard Copy
function setupPaymentTabs() {
    const tabButtons = document.querySelectorAll(".pay-tab-btn");
    const tabPanes = document.querySelectorAll(".pay-content");

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            const targetPay = button.getAttribute("data-pay");

            // Deactivate all
            tabButtons.forEach(btn => btn.classList.remove("active"));
            tabPanes.forEach(pane => pane.classList.remove("active"));

            // Activate current
            button.classList.add("active");
            document.getElementById(`pay-${targetPay}`).classList.add("active");
        });
    });

    // Copy to Clipboard feature
    const copyBtns = document.querySelectorAll(".btn-copy");
    copyBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const codeToCopy = btn.getAttribute("data-copy");
            
            // Clipboard API
            navigator.clipboard.writeText(codeToCopy).then(() => {
                const originalText = btn.textContent;
                btn.textContent = currentLang === 'sw' ? "Imecopiwa" : "Copied";
                btn.classList.add("copied");

                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.classList.remove("copied");
                }, 2000);
            }).catch(err => {
                console.error("Clipboard copy failed: ", err);
            });
        });
    });
}

// 12. Contact Form with Success Notification Toast
function setupContactForm() {
    const contactForm = document.getElementById("contactForm");
    const toastSuccess = document.getElementById("toastSuccess");

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Transition: Hide form inputs smoothly
        contactForm.classList.add("hidden");

        // Transition: Show Success Toast
        setTimeout(() => {
            toastSuccess.classList.add("show");
        }, 300);

        // Reset and show form again after 5 seconds
        setTimeout(() => {
            contactForm.reset();
            toastSuccess.classList.remove("show");
            
            setTimeout(() => {
                contactForm.classList.remove("hidden");
            }, 300);
        }, 5000);
    });
}

// 13. Active Navigation Links Highlighting
function setupNavigationHighlight() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    
    // Desktop Nav
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach(item => {
        item.classList.remove("active");
        let href = item.getAttribute("href");
        if (href === currentPath || (currentPath === '' && href === 'index.html')) {
            item.classList.add("active");
        }
    });

    // Mobile Nav
    const mobileNavItems = document.querySelectorAll(".mobile-nav-item");
    mobileNavItems.forEach(item => {
        item.classList.remove("active");
        let href = item.getAttribute("href");
        if (href === currentPath || (currentPath === '' && href === 'index.html')) {
            item.classList.add("active");
        }
    });
}

// 14. Interactive Bible Verse Generator
const inspiringVerses = [
    {
        sw: { text: `"Basi, mkitafuta kwanza ufalme wake, na haki yake; na hayo yote mtaongezewa."`, ref: "Mathayo 6:33" },
        en: { text: `"But seek first the kingdom of God and his righteousness, and all these things will be added to you."`, ref: "Matthew 6:33" }
    },
    {
        sw: { text: `"Msiwe na wasiwasi juu ya kitu chochote, bali katika kila jambo kwa kusali na kuomba pamoja na kushukuru, haja zenu na zijulikane na Mungu."`, ref: "Wafilipi 4:6" },
        en: { text: `"Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God."`, ref: "Philippians 4:6" }
    },
    {
        sw: { text: `"Bwana ndiye mchungaji wangu, sitapungukiwa na kitu. Katika malisho ya majani mabichi hunilaza, kando ya maji ya utulivu huniongoza."`, ref: "Zaburi 23:1-2" },
        en: { text: `"The Lord is my shepherd; I shall not want. He makes me lie down in green pastures. He leads me beside still waters."`, ref: "Psalm 23:1-2" }
    },
    {
        sw: { text: `"Maana nayajua mawazo ninayowawazia ninyi, asema Bwana, ni mawazo ya amani wala si ya mabaya, kuwapa ninyi tumaini siku zenu za mwisho."`, ref: "Yeremia 29:11" },
        en: { text: `"For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope."`, ref: "Jeremiah 29:11" }
    },
    {
        sw: { text: `"Nayaweza mambo yote katika yeye anitiaye nguvu."`, ref: "Wafilipi 4:13" },
        en: { text: `"I can do all things through him who strengthens me."`, ref: "Philippians 4:13" }
    }
];

function setupInteractiveVerses() {
    const btn = document.getElementById("nextVerseBtn");
    const txtEl = document.getElementById("verseText");
    const refEl = document.getElementById("verseRef");
    if (!btn || !txtEl || !refEl) return;
    
    let currentIndex = 0;
    
    // Initial display
    const initVerse = inspiringVerses[currentIndex][currentLang];
    txtEl.textContent = initVerse.text;
    refEl.textContent = initVerse.ref;
    
    // Sync with language switch
    window.addEventListener('languageChanged', () => {
        const verse = inspiringVerses[currentIndex][currentLang];
        txtEl.textContent = verse.text;
        refEl.textContent = verse.ref;
    });

    btn.addEventListener("click", () => {
        let nextIndex;
        do {
            nextIndex = Math.floor(Math.random() * inspiringVerses.length);
        } while (nextIndex === currentIndex);
        currentIndex = nextIndex;
        
        const verse = inspiringVerses[currentIndex][currentLang];
        
        // CSS Transition Animation via Opacity
        txtEl.style.opacity = 0;
        refEl.style.opacity = 0;
        setTimeout(() => {
            txtEl.textContent = verse.text;
            refEl.textContent = verse.ref;
            txtEl.style.opacity = 1;
            refEl.style.opacity = 1;
        }, 200);
    });
}

// 15. FAQ Accordion Logic
function setupFaqAccordion() {
    const triggers = document.querySelectorAll(".faq-trigger");
    triggers.forEach(trigger => {
        trigger.addEventListener("click", () => {
            const item = trigger.parentElement;
            const icon = trigger.querySelector(".faq-icon-arrow");
            
            // Toggle active state
            const isActive = item.classList.contains("active");
            
            // Close all others
            document.querySelectorAll(".faq-item").forEach(otherItem => {
                otherItem.classList.remove("active");
                const otherIcon = otherItem.querySelector(".faq-icon-arrow");
                if (otherIcon) otherIcon.textContent = "+";
            });
            
            if (!isActive) {
                item.classList.add("active");
                if (icon) icon.textContent = "-";
            } else {
                item.classList.remove("active");
                if (icon) icon.textContent = "+";
            }
        });
    });
}

// 16. Spiritual Poll Logic
function setupSpiritualPoll() {
    const pollCard = document.getElementById("spiritualPollCard");
    const pollOptions = document.getElementById("pollOptions");
    const pollResults = document.getElementById("pollResults");
    const resetBtn = document.getElementById("pollResetBtn");
    
    if (!pollCard || !pollOptions || !pollResults) return;
    
    // Initial seed counts
    let voteCounts = {
        unabii: 145,
        maombi: 110,
        afya: 54,
        familia: 82
    };
    
    const savedCounts = localStorage.getItem('spiritualPollCounts');
    if (savedCounts) {
        voteCounts = JSON.parse(savedCounts);
    } else {
        localStorage.setItem('spiritualPollCounts', JSON.stringify(voteCounts));
    }
    
    const showResultsView = () => {
        pollOptions.classList.add("hidden");
        pollResults.classList.remove("hidden");
        
        const total = Object.values(voteCounts).reduce((a, b) => a + b, 0);
        
        for (const [key, val] of Object.entries(voteCounts)) {
            const pct = Math.round((val / total) * 100);
            const pctEl = document.getElementById(`pct-${key}`);
            const fillEl = document.getElementById(`fill-${key}`);
            if (pctEl) pctEl.textContent = `${pct}%`;
            if (fillEl) fillEl.style.width = `${pct}%`;
        }
    };
    
    const userVote = localStorage.getItem('spiritualPollVoted');
    if (userVote) {
        showResultsView();
    }
    
    const optionBtns = document.querySelectorAll(".poll-option-btn");
    optionBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const voteKey = btn.getAttribute("data-vote");
            voteCounts[voteKey]++;
            localStorage.setItem('spiritualPollCounts', JSON.stringify(voteCounts));
            localStorage.setItem('spiritualPollVoted', voteKey);
            showResultsView();
        });
    });
    
    if (resetBtn) {
        resetBtn.addEventListener("click", () => {
            localStorage.removeItem('spiritualPollVoted');
            pollResults.classList.add("hidden");
            pollOptions.classList.remove("hidden");
        });
    }
}

// 17. Interactive Photo Gallery with Category Filtering & Lightbox Modal
function setupGallery() {
    const filterBtns = document.querySelectorAll(".gallery-filter-btn");
    const galleryItems = document.querySelectorAll(".gallery-item");
    const lightbox = document.getElementById("galleryLightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const lightboxCaption = document.getElementById("lightboxCaption");
    const closeBtn = document.querySelector(".lightbox-close");
    const prevBtn = document.querySelector(".lightbox-prev");
    const nextBtn = document.querySelector(".lightbox-next");

    if (!filterBtns.length || !galleryItems.length || !lightbox) return;

    // Filter Logic
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            // Remove active class from all
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filterValue = btn.getAttribute("data-filter");

            galleryItems.forEach(item => {
                const category = item.getAttribute("data-category");
                
                // Transition effect: fade out, filter, then fade in
                item.style.opacity = "0";
                item.style.transform = "scale(0.95)";
                
                setTimeout(() => {
                    if (filterValue === "all" || category === filterValue) {
                        item.style.display = "block";
                        setTimeout(() => {
                            item.style.opacity = "1";
                            item.style.transform = "scale(1)";
                        }, 50);
                    } else {
                        item.style.display = "none";
                    }
                }, 300);
            });
        });
    });

    // Lightbox Logic
    let currentImgIndex = 0;
    const triggers = document.querySelectorAll(".gallery-img-trigger");
    const visibleTriggers = () => Array.from(triggers).filter(t => t.closest(".gallery-item").style.display !== "none");

    const showImage = (index) => {
        const activeTriggers = visibleTriggers();
        if (index < 0) index = activeTriggers.length - 1;
        if (index >= activeTriggers.length) index = 0;
        currentImgIndex = index;

        const targetTrigger = activeTriggers[currentImgIndex];
        const imgUrl = targetTrigger.getAttribute("data-src") || targetTrigger.querySelector("img").getAttribute("src");
        const captionText = targetTrigger.querySelector(".gallery-overlay-text p")?.textContent || "";

        // Fade effect for lightbox transition
        lightboxImg.style.opacity = "0";
        setTimeout(() => {
            lightboxImg.src = imgUrl;
            lightboxCaption.textContent = captionText;
            lightboxImg.style.opacity = "1";
        }, 150);
    };

    triggers.forEach((trigger, idx) => {
        trigger.addEventListener("click", (e) => {
            e.preventDefault();
            const activeTriggers = visibleTriggers();
            const index = activeTriggers.indexOf(trigger);
            lightbox.classList.add("show");
            showImage(index);
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            lightbox.classList.remove("show");
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", () => showImage(currentImgIndex - 1));
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => showImage(currentImgIndex + 1));
    }

    // Close on click outside the image
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox || e.target.classList.contains("lightbox-content-wrapper")) {
            lightbox.classList.remove("show");
        }
    });

    // Keyboard support
    document.addEventListener("keydown", (e) => {
        if (!lightbox.classList.contains("show")) return;
        if (e.key === "Escape") lightbox.classList.remove("show");
        if (e.key === "ArrowLeft") showImage(currentImgIndex - 1);
        if (e.key === "ArrowRight") showImage(currentImgIndex + 1);
    });
}
