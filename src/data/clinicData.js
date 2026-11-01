/**
 * Lavith Dental Clinic - Centralized Clinic Data Store
 * Clinic in Visakhapatnam, Andhra Pradesh
 */

export const CLINIC_CONFIG = {
  clinicName: 'Lavith Dental Clinic',
  tagline: 'Your Smile. Our Passion.',
  phoneDisplay: '7794075129',
  phoneTel: '+917794075129',
  whatsappNumber: '917794075129',
  whatsappMessage: 'Hello Lavith Dental Clinic! I would like to enquire about booking a dental appointment.',
  email: 'contact@lavithdentalclinic.com',
  city: 'Visakhapatnam',
  state: 'Andhra Pradesh',
  country: 'India',
  address: 'Suite 204, Sea Breeze Heights, Beach Road, Pandurangapuram, Visakhapatnam, AP 530003',
  googleMapsUrl: 'https://maps.google.com/?q=Beach+Road+Visakhapatnam+Andhra+Pradesh',
  hours: {
    weekdays: 'Monday – Saturday: 9:00 AM – 8:00 PM',
    sunday: 'Sunday: 10:00 AM – 2:00 PM (Prior Request / Emergencies)',
    emergency: 'Emergency triage line available during clinic operating hours'
  }
};

export const TREATMENTS_DATA = [
  {
    id: 'general-dentistry',
    title: 'General Dentistry',
    badge: 'Essential Oral Health',
    iconClass: 'fa-solid fa-tooth',
    summary: 'Comprehensive oral examinations, digital diagnostic radiographs, tooth-colored composite restorations, and routine maintenance for strong teeth.',
    fullDescription: 'Our general dental consultations focus on preserving your natural teeth and identifying issues early before they develop into painful or costly concerns. Every examination includes a gentle physical assessment, soft-tissue screening, bite evaluation, and low-radiation digital imaging when clinically appropriate.',
    steps: [
      'Comprehensive tooth-by-tooth visual examination & gum assessment',
      'Low-dose digital X-rays to detect hidden decay or bone changes',
      'Minimally invasive composite resin restorations for natural tooth appearance',
      'Personalized preventive oral hygiene consultation'
    ],
    suitableFor: 'Adults and teens seeking routine maintenance, cavity checks, or tooth-colored fillings.',
    clinicalNote: 'Treatment recommendations are provided only after an in-person clinical assessment.'
  },
  {
    id: 'teeth-cleaning',
    title: 'Teeth Cleaning & Preventive Care',
    badge: 'Prevention First',
    iconClass: 'fa-solid fa-wand-magic-sparkles',
    summary: 'Gentle ultrasonic scaling, stain removal, polishing, and enamel-strengthening treatments to keep your gums healthy and breath fresh.',
    fullDescription: 'Professional prophylaxis (dental cleaning) removes hardened tartar (calculus) and bacterial biofilm that regular toothbrushes cannot reach. By maintaining a 6-month cleaning schedule, you protect your gums from inflammation (gingivitis) and preserve the bone supporting your teeth.',
    steps: [
      'Gentle ultrasonic scaling to remove stubborn tartar without scraping enamel',
      'Fine subgingival biofilm cleaning to protect delicate gum tissue',
      'Micro-polishing to remove surface tea, coffee, and tobacco stains',
      'Optional topical fluoride or remineralizing varnish for sensitive teeth'
    ],
    suitableFor: 'All patients recommended for routine preventive care every 6 months.',
    clinicalNote: 'Patients with active periodontal disease may require deeper scaling protocols.'
  },
  {
    id: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry & Smile Design',
    badge: 'Aesthetic Enhancement',
    iconClass: 'fa-solid fa-face-smile-beam',
    summary: 'Custom ceramic veneers, aesthetic composite bonding, and smile contouring designed to enhance symmetry while maintaining a natural look.',
    fullDescription: 'Cosmetic dentistry at Lavith Dental Clinic emphasizes harmony, function, and subtlety. We use high-grade dental ceramics and aesthetic composite bonding to correct chipped edges, gaps between teeth (diastemas), slight misalignments, or persistent discolorations.',
    steps: [
      'Detailed digital photography and smile proportion analysis',
      'Minimally invasive preparation with maximum natural enamel preservation',
      'High-translucency ceramic veneers handcrafted to match natural tooth vitality',
      'Direct aesthetic composite bonding for quick, single-visit cosmetic touch-ups'
    ],
    suitableFor: 'Patients wishing to repair chipped teeth, close small gaps, or refine smile aesthetics.',
    clinicalNote: 'Healthy gums and teeth are required before starting any cosmetic dental treatment.'
  },
  {
    id: 'teeth-whitening',
    title: 'Professional Teeth Whitening',
    badge: 'Brighten & Refresh',
    iconClass: 'fa-solid fa-sun',
    summary: 'Clinically supervised in-chair brightening and custom home trays for a safe, radiant smile without harming tooth enamel.',
    fullDescription: 'Unlike abrasive store-bought whitening pastes that can erode enamel, professional whitening utilizes pH-balanced, dental-grade bleaching gels under controlled supervision. We ensure your gums and dentin are safely isolated, minimizing post-treatment sensitivity while delivering noticeable shade improvement.',
    steps: [
      'Pre-whitening shade verification and tooth sensitivity screening',
      'Protective barrier application to shield gums and lips',
      'Application of dental-grade whitening formulation activated safely',
      'Post-treatment desensitizing care and guidance on maintaining bright results'
    ],
    suitableFor: 'Patients seeking to lighten natural teeth discolored by coffee, tea, turmeric, or aging.',
    clinicalNote: 'Whitening agents only affect natural tooth enamel and do not change the shade of crowns or fillings.'
  },
  {
    id: 'dental-implants',
    title: 'Dental Implants',
    badge: 'Permanent Replacement',
    iconClass: 'fa-solid fa-shield-halved',
    summary: 'Biocompatible titanium fixtures that replace missing tooth roots, restoring natural chewing strength, facial structure, and confidence.',
    fullDescription: 'Dental implants are the modern gold standard for replacing missing single or multiple teeth. Anchored into the jawbone, they fuse naturally with bone tissue (osseointegration) to support custom crowns without having to grind down healthy neighboring teeth.',
    steps: [
      '3D CBCT digital imaging to assess bone density, sinus proximity, and nerves',
      'Gentle surgical placement of high-purity medical titanium implant fixture',
      'Healing phase allowing natural biological integration with surrounding bone',
      'Custom-crafted ceramic crown attachment for life-like appearance and chewing ability'
    ],
    suitableFor: 'Patients with one or more missing teeth who have adequate bone support and good oral hygiene.',
    clinicalNote: 'Implant candidacy requires medical history review and 3D radiographic bone assessment.'
  },
  {
    id: 'orthodontics-aligners',
    title: 'Orthodontics & Clear Aligners',
    badge: 'Bite & Alignment',
    iconClass: 'fa-solid fa-grip-lines',
    summary: 'Virtually invisible clear aligners and modern aesthetic brackets to straighten crowded teeth, close gaps, and optimize your bite.',
    fullDescription: 'Straight teeth are not only about looks; they are significantly easier to clean, reduce abnormal tooth wear, and balance jaw muscle forces. We offer discrete, removable clear aligners tailored to your routine, as well as modern ceramic bracket systems.',
    steps: [
      'Digital 3D intraoral scanning without messy impression goop',
      'Predictable computer-guided simulation of step-by-step tooth movements',
      'Custom series of transparent, medical-grade BPA-free aligner trays',
      'Regular progress check-ins and final retention planning for lasting stability'
    ],
    suitableFor: 'Teens and adults looking for comfortable, subtle tooth straightening.',
    clinicalNote: 'Treatment duration varies depending on individual orthodontic complexity.'
  },
  {
    id: 'root-canal',
    title: 'Gentle Root Canal Treatment',
    badge: 'Tooth Preservation',
    iconClass: 'fa-solid fa-microscope',
    summary: 'Modern, pain-relieving endodontic therapy that cleans infected nerve tissue, preserves your natural tooth, and prevents extractions.',
    fullDescription: 'A root canal is a tooth-saving procedure performed when deep decay or trauma causes inflammation inside the tooth pulp. Using modern local anesthesia and rotary instrumentation, modern root canal therapy is as comfortable as getting a routine filling.',
    steps: [
      'Effective local anesthesia ensuring complete comfort throughout the visit',
      'Isolation with a dental dam for sterile, safe endodontic treatment',
      'Rotary cleaning and disinfection of tiny canal spaces inside the roots',
      'Biocompatible sealing followed by a protective crown to restore chewing strength'
    ],
    suitableFor: 'Patients suffering from persistent toothache, lingering cold/heat sensitivity, or deep decay.',
    clinicalNote: 'Teeth treated with root canals typically need a dental crown to protect against future fracture.'
  },
  {
    id: 'pediatric-dentistry',
    title: 'Pediatric Dentistry',
    badge: 'Kids & Teens',
    iconClass: 'fa-solid fa-child-reaching',
    summary: 'Fun, fear-free dental visits for infants, children, and teenagers, instilling healthy habits, cavity prevention, and positive dental attitudes.',
    fullDescription: 'We understand that positive childhood dental visits create confident adult dental patients. Our approach with young patients is gentle, patient, and educational, using tell-show-do techniques to make every checkup reassuring and enjoyable.',
    steps: [
      'Tell-show-do introduction to dental tools in a playful, low-stress environment',
      'Gentle tooth cleaning and monitoring of dental eruption milestones',
      'Protective dental sealants to shield deep grooved molars from sugary cavities',
      'Child and parent nutritional guidance for building strong teeth and gums'
    ],
    suitableFor: 'Children from the eruption of their first tooth through adolescence.',
    clinicalNote: 'Early checkups help identify bite development patterns and cavity risks early.'
  }
];

export const TRUST_BENEFITS = [
  {
    id: 'patient-centered',
    icon: 'fa-solid fa-hand-holding-heart',
    title: 'Patient-Centered Care',
    desc: 'We listen first. Every appointment is paced comfortably with tailored treatments centered on your individual needs.'
  },
  {
    id: 'modern-tech',
    icon: 'fa-solid fa-microchip',
    title: 'Modern Dental Technology',
    desc: 'Utilizing low-dose digital imaging and contemporary clinical tools to ensure precise, comfortable evaluations.'
  },
  {
    id: 'serene-env',
    icon: 'fa-solid fa-couch',
    title: 'Comfortable Environment',
    desc: 'A serene, hygienic studio setting created to ease dental anxiety and help patients of all ages feel relaxed.'
  },
  {
    id: 'clear-explanations',
    icon: 'fa-solid fa-comments',
    title: 'Clear Explanations',
    desc: 'Honest, transparent guidance regarding your options, timelines, and costs before any procedure begins.'
  }
];

export const WHY_CHOOSE_FEATURES = [
  {
    icon: 'fa-solid fa-notes-medical',
    title: 'Personalized Treatment Plans',
    desc: 'Tailored treatment options aligned with your health needs, schedule, and lifestyle.'
  },
  {
    icon: 'fa-solid fa-heart-pulse',
    title: 'Friendly Patient Communication',
    desc: 'A compassionate team that takes time to listen to your concerns without rushing.'
  },
  {
    icon: 'fa-solid fa-file-invoice',
    title: 'Clear Explanations of Options',
    desc: 'Transparent discussions regarding procedures, alternatives, and expected costs.'
  },
  {
    icon: 'fa-solid fa-shield-virus',
    title: 'Focus on Preventive Care',
    desc: 'Helping you safeguard natural teeth and minimize future dental emergencies.'
  },
  {
    icon: 'fa-solid fa-pump-medical',
    title: 'Modern Clinical Practices',
    desc: 'High standards of sterilization, autoclaved instruments, and digital record keeping.'
  },
  {
    icon: 'fa-regular fa-clock',
    title: 'Convenient Appointments',
    desc: 'Flexible evening and weekend time slots with hassle-free online request options.'
  }
];

export const DENTISTS_DATA = [
  {
    id: 'aarav-sharma',
    name: 'Dr. Aarav Sharma',
    qualifications: 'BDS, MDS • Lead Restorative Dentist',
    focus: 'Aesthetic Restorations & Preventive Care',
    bio: 'Dr. Aarav focuses on conservative restorative dentistry and natural smile enhancement. He takes pride in making anxious patients feel relaxed in the dental chair through open communication and gentle techniques.',
    image: '/assets/images/dentist-aarav.jpg'
  },
  {
    id: 'priya-ramakrishnan',
    name: 'Dr. Priya Ramakrishnan',
    qualifications: 'BDS, MDS • Specialist Orthodontist',
    focus: 'Clear Aligners & Bite Harmony',
    bio: 'Passionate about facial aesthetics and functional bite alignment, Dr. Priya crafts customized aligner plans for teenagers and working professionals seeking discreet, comfortable teeth straightening.',
    image: '/assets/images/dentist-priya.jpg'
  },
  {
    id: 'vikram-reddy',
    name: 'Dr. Vikram Reddy',
    qualifications: 'BDS, MDS • Oral Implantologist & Endodontist',
    focus: 'Dental Implants & Microscopic Root Canal',
    bio: 'Dedicated to tooth preservation and advanced implant restorations, Dr. Vikram combines high clinical precision with modern local analgesia to ensure comfortable, predictable surgical and root canal outcomes.',
    image: '/assets/images/dentist-vikram.jpg'
  }
];

export const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: 'Sneha V.',
    meta: 'Visakhapatnam • Routine Cleaning & Prevention (Demo)',
    avatar: '/assets/images/patient-1.jpg',
    quote: 'I had avoided visiting the dentist for nearly four years due to anxiety. From the moment I walked into Lavith Dental Clinic, the staff was patient and warm. The cleaning was completely gentle, and Dr. Aarav explained each step beforehand. I finally feel confident keeping regular checkups!',
    rating: 5
  },
  {
    id: 2,
    name: 'Rajesh K.',
    meta: 'Visakhapatnam • Clear Aligners Consultation (Demo)',
    avatar: '/assets/images/patient-2.jpg',
    quote: 'The clear aligner consultation with Dr. Priya was thorough and transparent. They took digital scans, showed me exactly how my teeth would shift, and didn\'t push unnecessary procedures. The clinic is spotless and modern.',
    rating: 5
  },
  {
    id: 3,
    name: 'Ananya M.',
    meta: 'Visakhapatnam • Root Canal Therapy (Demo)',
    avatar: '/assets/images/patient-3.jpg',
    quote: 'I visited with severe toothache on a Saturday afternoon. Dr. Vikram identified the problem immediately and performed a root canal with zero pain. The follow-up call the next day to check on my recovery showed genuine patient care.',
    rating: 5
  }
];

export const FAQ_DATA = [
  {
    id: 'faq-1',
    question: 'How do I book a dental appointment?',
    answer: 'You can easily request a consultation using the online booking form on this website, calling our front desk at 7794075129, or sending a message on WhatsApp. Our reception team will coordinate with you to confirm a mutually convenient date and time.'
  },
  {
    id: 'faq-2',
    question: 'What should I bring to my first visit?',
    answer: 'Please bring a valid photo ID, details of any current prescription medications or medical conditions, and any recent dental radiographs (X-rays) if you have had them taken in the past 6 to 12 months. Arriving 10 minutes early allows you to comfortably complete our standard medical intake questionnaire.'
  },
  {
    id: 'faq-3',
    question: 'How often should I schedule a dental checkup?',
    answer: 'For most children and adults, international dental guidelines recommend a comprehensive checkup and professional cleaning every 6 months. Patients with active gum treatment, braces, or higher cavity susceptibility may benefit from more frequent monitoring every 3 to 4 months.'
  },
  {
    id: 'faq-4',
    question: 'Do you provide cosmetic dental treatments?',
    answer: 'Yes. We offer conservative aesthetic options including professional chairside teeth whitening, handcrafted porcelain veneers, composite aesthetic bonding for chipped or spaced teeth, and clear aligners. We prioritize natural-looking results while preserving healthy tooth structure.'
  },
  {
    id: 'faq-5',
    question: 'Can I request a specific appointment time?',
    answer: 'Yes! We offer morning, afternoon, and evening appointments Monday through Saturday, as well as Sunday morning sessions for working professionals and families. When filling out our request form, select your preferred time slot and our team will work to accommodate your schedule.'
  },
  {
    id: 'faq-6',
    question: 'What should I do if I have urgent dental pain?',
    answer: 'If you experience severe toothache, dental trauma, swelling, or a broken tooth, please call our clinic phone line immediately at 7794075129. We reserve dedicated emergency triage slots during clinic hours to relieve acute pain as quickly as possible.'
  }
];
