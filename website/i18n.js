/* The Korean markup is the source copy. Each binding remembers it so switching
   back to Korean restores the original typography and inline elements. */
const bindings = [];
function bind(selector, mode, en, ja, zh) {
  const nodes = [...document.querySelectorAll(selector)];
  const read = node => {
    if (mode === 'html') return node.innerHTML;
    if (mode.startsWith('attr:')) return node.getAttribute(mode.slice(5));
    if (mode === 'lead') return [...node.childNodes].find(child => child.nodeType === Node.TEXT_NODE && child.textContent.trim())?.textContent || '';
    return node.textContent;
  };
  bindings.push({nodes, mode, values:{en, ja, 'zh-CN':zh}, originals:nodes.map(read)});
}

// Navigation and controls
bind('.skip-link','text','Skip to content','本文へスキップ','跳转到正文');
bind('.nav-pill a[href="#home"]','text','Home','ホーム','首页');
bind('.nav-pill a[href="#shop"], .footer-top a[href="#shop"]','text','Shop','ショップ','选购');
bind('.nav-pill a[href="#collection"], .footer-top a[href="#collection"]','text','Collection','コレクション','系列');
bind('.nav-pill a[href="#about"], .footer-top a[href="#about"]','text','Our story','ブランドについて','品牌故事');
bind('#mobile-menu a[href="#home"]','lead','Home ','ホーム ','首页 ');
bind('#mobile-menu a[href="#shop"]','lead','Shop ','ショップ ','选购 ');
bind('#mobile-menu a[href="#collection"]','lead','Collection ','コレクション ','系列 ');
bind('#mobile-menu a[href="#about"]','lead','Our story ','ブランドについて ','品牌故事 ');
bind('.header-shop','lead','Shop now ','今すぐ見る ','立即选购 ');
bind('#mobile-menu a[href*="login.php"], .footer-top a[href*="login.php"]','text','My account ↗','マイアカウント ↗','我的账户 ↗');
bind('.footer-top a[href*="guide.php"]','text','Customer care ↗','カスタマーサポート ↗','客户服务 ↗');
bind('.footer-top a[href^="mailto:"]','text','Contact ↗','お問い合わせ ↗','联系我们 ↗');
bind('.wordmark[aria-label]','attr:aria-label','têtu home','têtu ホーム','têtu 首页');
bind('.nav-pill','attr:aria-label','Main menu','メインメニュー','主菜单');
bind('#mobile-menu','attr:aria-label','Mobile menu','モバイルメニュー','移动菜单');
bind('.language-control span','text','Choose language','言語を選択','选择语言');
bind('#language-select','attr:aria-label','Choose language','言語を選択','选择语言');
bind('.search-trigger','attr:aria-label','Search categories','カテゴリーを検索','搜索品类');
bind('.header-actions a[href*="cart.php"]','attr:aria-label','Open official store cart','公式ストアのカートを開く','打开官方商城购物车');

// Hero and introduction
bind('.eyebrow-pill','lead',' Thoughtfully made. Naturally you.',' 丁寧につくり、自然体のあなたへ。',' 用心制作，自在如你。');
bind('#hero-title','html','Wear less.<br>Feel <em>more.</em>','少なく纏い、<br><em>もっと</em>自分らしく。','穿得更简，<br>感受<em>更多</em>。');
bind('.hero-korean','text','Timeless by nature. Unmistakably you.','時を重ねても、あなたらしく。','历久弥新，自在如你。');
bind('.hero-description','html','Clothes that become part of your everyday.<br>Thoughtful fabrics and refined silhouettes<br>made to mean more with time.','流行を越えて、日常に寄り添う服。<br>上質な素材と洗練されたシルエットに、<br>時とともに深まる価値を込めて。','超越潮流，融入日常的衣着。<br>以优质面料与利落廓形，<br>让价值随时间沉淀。');
bind('.hero-cta .button','lead','Explore the wardrobe ','ワードローブを見る ','探索衣橱 ');
bind('.hero-cta .story-link','lead','Our philosophy ','私たちの想い ','我们的理念 ');
bind('.hero-signature','lead',' LESS, BUT WITH MEANING.',' 少なく、より意味深く。',' 少一些，更有意义。');
bind('.floating-note>span:first-child','html','THE CONSIDERED<br>WARDROBE','想いを込めた<br>ワードローブ','用心甄选的<br>衣橱');
bind('.scroll-cue','lead',' A little further. A little closer.',' もう少し先へ。もっと近くへ。',' 再向前一点，再靠近一点。');
bind('.hero-caption','text','SOFT TEXTURES. STRONG IDENTITY.','やわらかな質感、確かな個性。','柔软质感，鲜明个性。');
bind('.intro-strip','attr:aria-label','Brand values','ブランドの価値観','品牌价值');
bind('.intro-strip>p','html','For the way <em>you live.</em>','<em>あなたらしい</em>毎日に。','为<em>你的生活</em>而作。');
bind('.intro-strip>div:nth-of-type(1)','lead',' Thoughtful details',' 心を配ったディテール',' 用心的细节');
bind('.intro-strip>div:nth-of-type(2)','lead',' Effortless silhouettes',' 自然体のシルエット',' 自在的廓形');
bind('.intro-strip>div:nth-of-type(3)','lead',' Timeless essentials',' 時を越える定番',' 历久弥新的必备单品');

// Shop and products
bind('.shop-section .section-head .eyebrow','text','THE EVERYDAY WARDROBE','日常のワードローブ','日常衣橱');
bind('.shop-section .section-head h2','html','Find your<br><em>everyday favourites.</em>','毎日に寄り添う<br><em>お気に入りを。</em>','找到你的<br><em>日常挚爱。</em>');
bind('.shop-section .section-head>p','html','There is a reason you reach for certain pieces.<br>Find the one that feels at home in your day.','つい手が伸びる服には、理由がある。<br>日常に自然となじむ一着を。','总有些衣服，让你一再选择。<br>找到自然融入日常的那一件。');
bind('.filters','attr:aria-label','Shop categories','商品カテゴリー','商品分类');
bind('.filters [data-filter="all"]','lead','All pieces ','すべて ','全部单品 ');
bind('.filters [data-filter="outer"]','text','Outer','アウター','外套');
bind('.filters [data-filter="knit"]','text','Knit','ニット','针织');
bind('.filters [data-filter="dress"]','text','Dress','ドレス','连衣裙');
bind('#category-link','lead','More at the official store ','公式ストアでもっと見る ','前往官方商城查看更多 ');
bind('.product-card[data-category="outer"] .product-category','text','THE OUTER EDIT','アウターセレクション','外套精选');
bind('.product-card[data-category="knit"] .product-category','text','SOFT BY NATURE','自然なやわらかさ','自然柔软');
bind('.product-card[data-category="dress"] .product-category','text','SIMPLY YOURSELF','ありのままの私','做简单的自己');
bind('.product-card[data-category="outer"] .product-info p','text','A lasting silhouette for familiar seasons.','いつもの季節に、長く寄り添うシルエット。','熟悉的季节，恒久的廓形。');
bind('.product-card[data-category="knit"] .product-info p','text','A soft touch of warmth for every day.','日常にやさしい温もりを。','为日常增添柔软暖意。');
bind('.product-card[data-category="dress"] .product-info p','text','Your own balance, in a single piece.','一着で叶える、自分らしいバランス。','一件衣服，找到自己的平衡。');
bind('.product-card[data-category="outer"] .product-category-link','lead','Explore outer ','アウターを見る ','探索外套 ');
bind('.product-card[data-category="knit"] .product-category-link','lead','Explore knit ','ニットを見る ','探索针织 ');
bind('.product-card[data-category="dress"] .product-category-link','lead','Explore dress ','ドレスを見る ','探索连衣裙 ');
bind('.product-card[data-category="outer"] .product-image','attr:aria-label','View Essential duffle coat','エッセンシャル ダッフルコートの詳細','查看经典牛角扣大衣');
bind('.product-card[data-category="knit"] .product-image','attr:aria-label','View Kid mohair knit vest','キッドモヘア ニットベストの詳細','查看马海毛针织背心');
bind('.product-card[data-category="dress"] .product-image','attr:aria-label','View V-neck wool balloon dress','Vネック ウール バルーンドレスの詳細','查看V领羊毛灯笼连衣裙');
bind('.product-card[data-category="outer"] img','attr:alt','têtu essential duffle coat in deep green','深緑のtêtuエッセンシャル ダッフルコート','深绿色têtu经典牛角扣大衣');
bind('.product-card[data-category="knit"] img','attr:alt','têtu kid mohair knit vest in ivory','アイボリーのtêtuキッドモヘア ニットベスト','象牙白têtu马海毛针织背心');
bind('.product-card[data-category="dress"] img','attr:alt','têtu V-neck wool balloon dress in khaki','カーキのtêtu Vネック ウール バルーンドレス','卡其色têtu V领羊毛灯笼连衣裙');
bind('.color-green','attr:aria-label','Deep green','深緑','深绿色');
bind('.color-ivory','attr:aria-label','Ivory','アイボリー','象牙白');
bind('.color-khaki','attr:aria-label','Khaki','カーキ','卡其色');

// Collection, story and help
bind('.collection-photo>img','attr:alt','têtu campaign — checked sleeveless dress in natural movement','têtuキャンペーン — 自然な動きのチェック柄ノースリーブドレス','têtu品牌企划——自然律动中的格纹无袖连衣裙');
bind('.photo-top span:first-child','text','TÊTU / COLLECTION','TÊTU / コレクション','TÊTU / 系列');
bind('.photo-caption','text','In your own rhythm.','あなたのリズムで。','循着自己的节奏。');
bind('.round-arrow','attr:aria-label','View all collections at the official store','公式ストアのコレクションを見る','在官方商城查看全部系列');
bind('.collection-copy .eyebrow','text','THE TÊTU PERSPECTIVE','TÊTUの視点','TÊTU的视角');
bind('.collection-copy h2','html','A slower pace.<br>A <em>lasting</em><br>impression.','ゆっくりと。<br><em>長く</em>心に残る<br>装いを。','放慢脚步，<br>留下<em>恒久</em>的<br>印象。');
bind('.collection-copy h3','text','Beauty without hurry.','急がない美しさ。','从容之美。');
bind('.collection-copy p','html','See the familiar day in a different light.<br>Natural movement, delicate textures,<br>and clothes for the moments that feel like you.','いつもの一日を、少し違う目で見る。<br>自然な動き、繊細な質感、<br>そして自分らしい瞬間のための服。','换一个角度，看待熟悉的每一天。<br>自然的律动、细腻的质感，<br>为每个真实的自己而作。');
bind('.collection-copy .button','lead','Discover the collection ','コレクションを見る ','探索系列 ');
bind('.collection-footnote','text','A WARDROBE THAT GROWS WITH YOU.','あなたとともに育つワードローブ。','与你一同成长的衣橱。');
bind('.about>.eyebrow','text','A LITTLE STUBBORN. ALWAYS TÊTU.','少し頑固に、いつもTÊTUらしく。','有点执着，始终是TÊTU。');
bind('.about h2','html','Some things<br>are worth <em>holding on to.</em>','大切なものは、<br><em>ずっと大切に。</em>','有些美好，<br>值得<em>一直坚持。</em>');
bind('.about-intro','text','têtu: a quiet conviction about good clothes.','têtu、良い服への揺るがないこだわり。','têtu，对好衣服的坚定坚持。');
bind('.values article:nth-child(1) h3','text','A conviction in the essentials','本質へのこだわり','对本质的坚持');
bind('.values article:nth-child(1) p','html','têtu means “stubborn” in French.<br>Every detail holds the standards<br>we keep from start to finish.','têtuはフランス語で「頑固」。<br>一着を仕上げるまで守り続ける基準を、<br>すべてのディテールに込めています。','têtu在法语中意为“执着”。<br>从构思到成衣，我们坚持的标准<br>都融入每一处细节。');
bind('.values article:nth-child(1) .value-en','text','THOUGHTFULLY CONSIDERED','一つひとつ、丁寧に','用心考量每个细节');
bind('.values article:nth-child(2) h3','text','Clarity through simplicity','削ぎ落として、鮮明に','越简单，越鲜明');
bind('.values article:nth-child(2) p','html','Beauty in restraint and simplicity.<br>Silhouettes that let the wearer’s<br>own character come through.','節度とシンプルさの中にある美しさ。<br>着る人らしさが自然に引き立つ<br>シルエットを考えます。','在克制与简约中发现美。<br>用自然的廓形，衬托穿着者<br>独有的气质。');
bind('.values article:nth-child(2) .value-en','text','QUIETLY DISTINCTIVE','静かに際立つ','低调而鲜明');
bind('.values article:nth-child(3) h3','text','Value beyond the season','季節を越える価値','超越季节的价值');
bind('.values article:nth-child(3) p','html','The pleasure of wearing it longer<br>outlasts a passing trend. Pieces worth<br>returning to, season after season.','流行よりも、長く着る喜びを。<br>今日も次の季節も手に取りたくなる<br>価値ある服を目指します。','比潮流更珍贵的，是长久穿着的喜悦。<br>今天与下一个季节，<br>都值得再次穿上的衣服。');
bind('.values article:nth-child(3) .value-en','text','MADE TO STAY','長く愛せる一着','值得长久珍藏');
bind('.about>.inline-link','lead','Read our story ','ブランドストーリー ','阅读品牌故事 ');
bind('.support .eyebrow','text','HERE FOR YOU','いつでもサポート','随时为你服务');
bind('.support h2','html','A little help,<br><em>along the way.</em>','あなたの毎日に、<br><em>そっと寄り添って。</em>','一路相伴，<br><em>为你解答。</em>');
bind('.support>div>p','text','For every moment you share with têtu.','têtuと過ごすすべての時間のために。','陪伴你与têtu相遇的每个时刻。');
bind('.support .inline-link','lead','Shopping guide ','ご利用ガイド ','购物指南 ');
bind('.faq details:nth-child(1) summary','lead','How can I check product details and sizes? ','商品の詳細やサイズはどこで確認できますか？ ','在哪里查看商品详情和尺码？ ');
bind('.faq details:nth-child(1) p','text','Choose a piece above to visit its category in the official store. The product page has current sizes, materials and availability.','上の商品を選ぶと公式ストアのカテゴリーへ移動します。詳しいサイズ、素材、在庫状況は各商品ページでご確認ください。','点击上方心仪的单品前往官方商城分类页。尺码、面料和库存请以各商品详情页为准。');
bind('.faq details:nth-child(2) summary','lead','Where can I check my order and delivery? ','注文や配送状況はどこで確認できますか？ ','在哪里查看订单和配送状态？ ');
bind('.faq details:nth-child(2) p','text','Sign in to the official store to check your order history and delivery status.','公式ストアのアカウントで注文履歴と配送状況をご確認ください。','登录官方商城账户，查看订单记录和配送状态。');
bind('.faq details:nth-child(2) a','text','Official store sign in ↗','公式ストアにログイン ↗','登录官方商城 ↗');
bind('.faq details:nth-child(3) summary','lead','I need an exchange, return or other help ','交換・返品について相談したい ','需要换货、退货或其他帮助 ');
bind('.faq details:nth-child(3) p','text','Policies may vary by product. Please check the official store guide, or call customer care at 02-2231-2549.','商品によってご案内が異なる場合があります。公式ストアのご利用ガイドをご確認いただくか、02-2231-2549までお問い合わせください。','不同商品的政策可能有所差异。请查看官方商城指南，或致电客服 02-2231-2549。');
bind('.faq details:nth-child(3) a','text','View exchange and return guide ↗','交換・返品ガイドを見る ↗','查看换货及退货指南 ↗');

// Closing, footer and dialogs
bind('.closing .eyebrow','text','YOUR EVERYDAY, RECONSIDERED.','いつもの毎日を、もう一度。','重新发现你的日常。');
bind('.closing h2','html','Make room<br>for <em>what matters.</em>','<em>大切なもの</em>のために、<br>余白を。','为<em>重要的事物</em><br>留出空间。');
bind('.closing .button','lead','Find your next favourite ','次のお気に入りを見つける ','寻找下一件挚爱 ');
bind('.footer-top>p','html','Timeless by nature.<br><span>Unmistakably you.</span>','時を重ねても。<br><span>あなたらしく。</span>','历久弥新。<br><span>自在如你。</span>');
bind('.footer-bottom>span:nth-child(1)','text','© têtu · Dael Co., Ltd.','© têtu · 株式会社デイル','© têtu · Dael有限公司');
bind('.footer-bottom>span:nth-child(2)','text','Hero image: AI concept artwork · Check products and make purchases at the official store.','メイン画像：AIコンセプト画像 · 商品の確認と購入は公式ストアでお願いします。','主视觉：AI概念图片 · 商品信息及购买请前往官方商城。');
bind('.footer-bottom>a','text','BACK TO TOP ↑','ページ上部へ ↑','返回顶部 ↑');
bind('.footer-bottom>a','attr:aria-label','Back to top','ページ上部へ','返回顶部');
bind('.dialog-close','attr:aria-label','Close dialog','閉じる','关闭');
bind('.availability-note','text','Check the official store for current prices, sizes and availability.','価格、サイズ、在庫状況は公式ストアでご確認ください。','价格、尺码及库存请以官方商城为准。');
bind('#product-link','lead','View at the official store ','公式ストアで見る ','前往官方商城查看 ');
bind('.search-dialog>.eyebrow','text','FIND YOUR EVERYDAY','毎日の一着を探す','发现日常所爱');
bind('#search-title','html','What speaks to <em>you?</em>','あなたらしい一着は<em>どれ？</em>','哪一件<em>打动了你？</em>');
bind('.search-dialog label','text','What are you looking for?','どんな服をお探しですか？','你在寻找什么衣服？');
bind('#search-input','attr:placeholder','Outer, knit, dress…','アウター、ニット、ドレス…','外套、针织、连衣裙…');

const dynamic = {
  ko:{motionOn:'Motion on',motionOff:'Motion off',motionPause:'배경 움직임 일시정지',motionPlay:'배경 움직임 재생',menuOpen:'메뉴 열기',menuClose:'메뉴 닫기',filterCount:'{{count}}개의 아이템을 표시합니다.',noResults:'일치하는 카테고리가 없습니다. 아우터, 니트, 드레스로 다시 찾아보세요.'},
  en:{motionOn:'Motion on',motionOff:'Motion off',motionPause:'Pause background motion',motionPlay:'Play background motion',menuOpen:'Open menu',menuClose:'Close menu',filterCount:'Showing {{count}} items.',noResults:'No matching categories. Try outer, knit or dress.'},
  ja:{motionOn:'動きオン',motionOff:'動きオフ',motionPause:'背景の動きを一時停止',motionPlay:'背景の動きを再生',menuOpen:'メニューを開く',menuClose:'メニューを閉じる',filterCount:'{{count}}点の商品を表示しています。',noResults:'該当するカテゴリーがありません。アウター、ニット、ドレスでお試しください。'},
  'zh-CN':{motionOn:'动态开启',motionOff:'动态关闭',motionPause:'暂停背景动画',motionPlay:'播放背景动画',menuOpen:'打开菜单',menuClose:'关闭菜单',filterCount:'正在显示 {{count}} 件商品。',noResults:'没有匹配的分类。请尝试搜索外套、针织或连衣裙。'}
};
const productCopy = {
  ko:{outer:{category:'Outer',color:'Deep green',description:'떼뚜의 에센셜 더플코트. 익숙한 더플 실루엣과 딥 그린 컬러를 공식몰에서 만나보세요.'},knit:{category:'Knit',color:'Ivory',description:'떼뚜의 키드 모헤어 니트 베스트. 일상에 부드럽게 더해지는 아이보리 컬러를 만나보세요.'},dress:{category:'Dress',color:'Khaki',description:'떼뚜의 브이넥 울 벌룬 드레스. 간결한 실루엣과 차분한 카키 컬러를 공식몰에서 확인해 보세요.'}},
  en:{outer:{category:'Outer',color:'Deep green',description:'Discover têtu’s essential duffle coat, a familiar silhouette in deep green, at the official store.'},knit:{category:'Knit',color:'Ivory',description:'Discover the kid mohair knit vest in soft ivory at the official store.'},dress:{category:'Dress',color:'Khaki',description:'Discover the V-neck wool balloon dress in a calm khaki tone at the official store.'}},
  ja:{outer:{category:'アウター',color:'深緑',description:'おなじみのダッフルシルエットと深緑が魅力のエッセンシャル ダッフルコートを公式ストアでご覧ください。'},knit:{category:'ニット',color:'アイボリー',description:'日常にやさしくなじむアイボリーのキッドモヘア ニットベストを公式ストアでご覧ください。'},dress:{category:'ドレス',color:'カーキ',description:'すっきりしたシルエットと落ち着いたカーキが魅力のVネック ウール バルーンドレスを公式ストアでご覧ください。'}},
  'zh-CN':{outer:{category:'外套',color:'深绿色',description:'前往官方商城查看têtu经典牛角扣大衣，感受熟悉的廓形与深绿色调。'},knit:{category:'针织',color:'象牙白',description:'前往官方商城查看象牙白马海毛针织背心，为日常增添柔软暖意。'},dress:{category:'连衣裙',color:'卡其色',description:'前往官方商城查看V领羊毛灯笼连衣裙，感受简洁廓形与沉稳的卡其色。'}}
};
const descriptions = {
  ko:'têtu — 오래도록, 나답게. 시간이 지나도 변하지 않는 가치와 나만의 일상을 위한 옷.',
  en:'têtu — timeless clothes for an everyday that is unmistakably yours.',
  ja:'têtu — 時を重ねても、あなたらしく。日常に寄り添う服。',
  'zh-CN':'têtu — 历久弥新，自在如你。为你的日常而作。'
};
const titles = {
  ko:'têtu — Timeless by nature.',
  en:'têtu — Timeless by nature.',
  ja:'têtu — 時を重ねても、あなたらしく。',
  'zh-CN':'têtu — 历久弥新，自在如你。'
};
const languageSelect = document.querySelector('#language-select');
let language = 'ko';
function setLanguage(next, updateUrl = false) {
  if (!dynamic[next]) next = 'ko';
  language = next;
  document.documentElement.lang = next;
  languageSelect.value = next;
  document.title = titles[next];
  document.querySelector('meta[name="description"]').content = descriptions[next];
  for (const binding of bindings) binding.nodes.forEach((node, index) => {
    const value = next === 'ko' ? binding.originals[index] : binding.values[next];
    if (binding.mode === 'html') node.innerHTML = value;
    else if (binding.mode.startsWith('attr:')) node.setAttribute(binding.mode.slice(5), value);
    else if (binding.mode === 'lead') {
      const textNode = [...node.childNodes].find(child => child.nodeType === Node.TEXT_NODE && child.textContent.trim());
      if (textNode) textNode.textContent = value;
    } else node.textContent = value;
  });
  try { localStorage.setItem('tetu-language', next); } catch (_) {}
  if (updateUrl) {
    const url = new URL(location.href);
    if (next === 'ko') url.searchParams.delete('lang');
    else url.searchParams.set('lang', next);
    history.replaceState(null, '', url);
  }
  document.dispatchEvent(new CustomEvent('tetu:languagechange', {detail:{language:next}}));
}
window.tetuI18n = {
  get language() { return language; },
  t(key, params = {}) { return dynamic[language][key].replace(/\{\{(\w+)\}\}/g, (_, name) => params[name] ?? ''); },
  product(id) { return productCopy[language][id]; },
  setLanguage
};
let savedLanguage = 'ko';
try { savedLanguage = localStorage.getItem('tetu-language') || 'ko'; } catch (_) {}
const requestedLanguage = new URLSearchParams(location.search).get('lang');
setLanguage(dynamic[requestedLanguage] ? requestedLanguage : savedLanguage);
languageSelect.addEventListener('change', event => setLanguage(event.target.value, true));
