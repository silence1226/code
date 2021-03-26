

// 1 介绍JavaScript的基本数据类型 0
// number,string,boolean,undefined,null,symbol,bigint

// 1.1 get 与post区别 1  4
  // GET参数通过URL传递，POST放在Request body中。
  // GET请求会被浏览器主动cache，而POST不会，除非手动设置。
  // GET请求只能进行url编码，而POST支持多种编码方式。
  // GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留。
  // GET请求在URL中传送的参数是有长度限制的，而POST么有。
  //  GET和POST还有一个重大区别，简单的说：
// GET产生一个TCP数据包；POST产生两个TCP数据包。对于GET方式的请求，浏览器会把http header和data一并发送出去，服务器响应200（返回数据）；
// 而对于POST，浏览器先发送header，服务器响应100 continue，浏览器再发送data，服务器响应200 ok（返回数据）。也就是说，GET只需要汽车跑一趟就把货送到了，而POST得跑两趟，第一趟，先去和服务器打个招呼“嗨，我等下要送一批货来，你们打开门迎接我”，然后再回头把货送过去。
// 3 Javascript实现继承的几种方式 2 
    // 继承就是子类继承父类的特征和行为，使得子类对象（实例）具有父类的属性和方法，或子类从父类继承方法，使得子类具有父类相同的行为。 
    //  var p={name:'p'};
    // 这里的o4是一个空对象，把Object.create(p)这个方法把p的相关属性放在o4这个空对象的__proto__上面
    // Object.create()里面的参数是一个对象，这里是需要记住的
    // var o4=Object.create(p);
// 4 null，undefined的区别
    // null 是一个空对象指针，比如原型链的终点是null
    // undefined是一个未定义的变量，比如变量被申明但没有赋值、这时是undefined
// 5 什么是闭包（closure），为什么要用它？1
    // 什么是闭包: 我个人理解，闭包是就是函数中的函数，里面的函数可以访问外面函数的变量，外面的变量的是这个内部函数的一部分。
    // 作用: 1) 使用闭包可以访问函数中的变量。 2) 可以使变量长期保存在内存中，生命周期比较长。3）闭包中会进行变量提升

// 6 怎么阻止冒泡 1 
    // 1）event.stopPropagation(); 
    // 2) 方法执行的时候return false ,比如$("#hr_three").click(function(event) { return false; }); 
// 6.1 Event Loop(事件循环) 
//  同步和异步任务分别进入不同的执行环境，同步的进入主线程，即主执行栈，异步的进入任务队列。主线程内的任务执行完毕为空，会去任务队列读取对应的任务，推入主线程执行。 
//  上述过程的不断重复就是我们说的 Event Loop (事件循环)。
// 6.2 节流与防抖
  // 节流与防抖的区别
  // 节流与防抖的前提都是某个行为持续地触发，不同之处只要判断是要优化到减少它的执行次数还是只执行一次就行。
  // 节流例子，像dom的拖拽，如果用消抖的话，就会出现卡顿的感觉，因为只在停止的时候执行了一次，这个时候就应该用节流，在一定时间内多次执行，会流畅很多。
  // 防抖例子，像仿百度搜索，就应该用防抖，当我连续不断输入时，不会发送请求；当我一段时间内不输入了，才会发送一次请求；如果小于这段时间继续输入的话，时间会重新计算，也不会发送请求。
// 7 new操作符具体干了什么呢?
  // 1）创建一个空的对象  var obj=new Object（）；
  // 2）让空对象的原型属性指向原型链，设置原型链 obj._proto_=Func.prototype;
  // 3）让构造函数的this指向obj，并执行函数体 var result=Func.call(obj);
  // 4）判断返回类型，如果是值就返回这个obj，如果是引用类型，返回这个引用对象。
// 一个页面从输入 URL 到页面加载显示完成，这个过程中都发生了什么？
/***
 * 1、浏览器地址栏输入url
2、浏览器会先查看浏览器缓存--系统缓存--路由缓存，如有存在缓存，就直接显示。如果没有，接着第三步
3、域名解析（DNS）获取相应的ip
4、浏览器向服务器发起tcp连接，与浏览器建立tcp三次握手
    知道了服务器的 IP 地址，下面便开始与服务器建立连接了。
    通俗地讲，通信连接的建立需要经历以下三个过程：
    主机向服务器发送一个建立连接的请求（您好，我想认识您）；
    服务器接到请求后发送同意连接的信号（好的，很高兴认识您）；
    主机接到同意连接的信号后，再次向服务器发送了确认信号（我也很高兴认识您），自此，主机与服务器两者建立了连接。
5、握手成功，浏览器向服务器发送http请求，请求数据包
6、服务器请求数据，将数据返回到浏览器
7、浏览器接收响应，读取页面内容，解析html源码，生成DOm树
8、解析css样式、浏览器渲染，js交互绑定多个域名，数量不限；
 * 
*/
// 8 同步和异步的区别? 1
  // 同步就相当于是 当客户端发送请求给服务端，在等待服务端响应的请求时，客户端不做其他的事情。当服务端做完了才返回到客户端。这样的话客户端需要一直等待。用户使用起来会有不友好。
  // 异步就是，当客户端发送给服务端请求时，在等待服务端响应的时候，客户端可以做其他的事情，这样节约了时间，提高了效率。
// 9 同源策略 1
// 如果两个 URL 的 protocol(协议)、port (如果有指定的话)和 host 都相同的话，则这两个 URL 是同源。
// 10 如何跨域 3 --1 
// jsonp：
// JSONP的优点是：它不像XMLHttpRequest对象实现的Ajax请求那样受到同源策略的限制；它的兼容性更好，在更加古老的浏览器中都可以运行，不需要XMLHttpRequest或ActiveX的支持；并且在请求完毕后可以通过调用callback的方式回传结果。
// JSONP的缺点则是：它只支持GET请求而不支持POST等其它类型的HTTP请求；它只支持跨域HTTP请求这种情况，不能解决不同域的两个页面之间如何进行JavaScript调用的问题。
// 后端 resp.setHeader("Access-Control-Allow-Origin", "*");
// 前端: 普通跨域请求：只服务端设置Access-Control-Allow-Origin即可，前端无须设置，若要带cookie请求：前后端都需要设置。需注意的是：由于同源策略的限制，所读取的cookie为跨域请求接口所在域的cookie，而非当前页。
// 目前，所有浏览器都支持该功能(IE8+：IE8/9需要使用XDomainRequest对象来支持CORS）)，CORS也已经成为主流的跨域解决方案。
// 11 call 、apply bind
  // ar arr = [1, 2, 3, 89, 46]
  // var max = Math.max.call(null, arr[0], arr[1], arr[2], arr[3], arr[4])//89
  // var max = Math.max.apply(null,arr)//89
  // bind 方法不会立即执行，而是返回一个改变了上下文 this 后的函数
  // function fn(a, b, c) {
  //   console.log(a, b, c);
  // }
  // var fn1 = fn.bind(null, 'Dot');

  // fn('A', 'B', 'C');            // A B C
  // fn1('A', 'B', 'C');           // Dot A B
  // fn1('B', 'C');                // Dot B C
  // fn.call(null, 'Dot');      // Dot undefined undefined
// 12 回流与重绘
  // 1). 当render tree中的一部分(或全部)因为元素的规模尺寸，布局，隐藏等改变而需要重新构建。这就称为回流(reflow)。每个页面至少需要一次回流，就是在页面第一次加载的时候。在回流的时候，浏览器会使渲染树中受到影响的部分失效，并重新构造这部分渲染树，完成回流后，浏览器会重新绘制受影响的部分到屏幕中，该过程成为重绘。
  // 2). 当render tree中的一些元素需要更新属性，而这些属性只是影响元素的外观，风格，而不会影响布局的，比如background-color。则就叫称为重绘。
// 12.1 DOM 操作——怎样添加、移除、移动、复制、创建和查找节点？
  // （1）创建新节点
  // createDocumentFragment()    //创建一个DOM片段
  // createElement()   //创建一个具体的元素
  // createTextNode()   //创建一个文本节点
  // （2）添加、移除、替换、插入
  // appendChild()
  // removeChild()
  // replaceChild()
  // insertBefore()
  // （3）查找
  // getElementsByTagName()    //通过标签名称
  // getElementsByName()    //通过元素的Name属性的值
  // getElementById()    //通过元素Id，唯一性
// 13 宏观任务与微观任务 2
// setTimeout(function(){
//   console.log('1')
//   });  
// new  Promise(function(resolve){
//   console.log('2');
//   resolve();
// }).then(function(){
// console.log('3')
// });
// console.log('4');
// 然后回到开头的代码。因为settimeout是宏任务，虽然先执行的他，但是他被放到了宏任务的eventqueue里面，然后代码继续往下检查看有没有微任务，检测到Promise的then函数把他放入了微任务序列。等到主线进程的所有代码执行结束后。先从微任务queue里拿回掉函数，然后微任务queue空了后再从宏任务的queue拿函数。
// 所以正确的执行结果当然是：2，4，3，1。

// 14 数组slice和splice的区别？
//splice 返回一个数组，数组里面是删除的元素，会改变原数组
// slice是截取数组，不会改变原数组
// 算法 36进制转换 1
// descNumber 转换的数
// 要转换成什么进制
function baseConvertar(num,base) {
  const digital = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let stack = [];
  let ans = '';
  if(base < 2 || base > 36) return '';
  while(num > 0) {
      stack.push(num % base);
      num = Math.floor(num / base);
  }
  while(stack.length) ans += digital[stack.pop()];
  return ans;
}

// 15 排序算法知多少 ？ 各个原理 
   // 1) 快速排序的主要思想是通过划分将待排序的序列分成前后两部分，其中前一部分的数据都比后一部分的数据要小，然后再递归调用函数对两部分的序列分别进行快速排序，以此使整个序列达到有序。
   // 时间复杂度: O(nlogn)
   // 空间复杂度: O(nlogn)
  /** 
const sortArray = function(nums){
    let len = nums.length;
    if(len < 2) return nums;
    return quickSort(nums,0, len -1);
}
const quickSort = function(nums,left,right) {
    if(left < right) {
        let poi = position(nums,left,right);
        quickSort(nums,left,poi-1);
        quickSort(nums,poi+1,right);
    }
    return nums;
}
const position = function(nums,left,right) {
    let poi = right;
    let idx = left;
    for(let i = left; i < right;i++) {
        if(nums[i] < nums[poi]) {
            [nums[i],nums[idx]] = [nums[idx],nums[i]];
            idx++;
        }
    }
    [nums[poi],nums[idx]] = [nums[idx],nums[poi]];
    return idx;
}
 **/
  // 2) 堆排序的思想就是先将待排序的序列建成大根堆，使得每个父节点的元素大于等于它的子节点。此时整个序列最大值即为堆顶元素，我们将其与末尾元素交换，使末尾元素为最大值，然后再调整堆顶元素使得剩下的 n-1个元素仍为大根堆，再重复执行以上操作我们即能得到一个有序的序列。
  // 时间复杂度: O(nlogn)
  // 空间复杂度: O(1)
  /**
   * let len;
    var sortArray = function(nums) {
        if(nums.length < 2) return nums;
        buildMaxHeap(nums);
        for(let i = nums.length - 1;i >=0; i--) {
            swap(nums,0,i);
            len--;
            heapify(nums,0);
        }
        return nums;
    };
    const buildMaxHeap = (nums)=> {
        len = nums.length;
        for(let i = Math.floor(len / 2); i >=0; i--) {
            heapify(nums,i);
        }
    }
    const heapify = (nums,i) => { // 堆调整 
        let left = 2 * i + 1;
        let right = 2 * i + 2;
        let largest = i;
        while(left < len && nums[left] > nums[largest]) largest = left;
        while(right < len && nums[right] > nums[largest]) largest = right;
        if(largest !== i) {
            swap(nums,i,largest);
            heapify(nums,largest);
        }
    }
    const swap = (nums,i,j) => {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }* **/
  // 3) 归并排序: 归并排序利用了分治的思想来对序列进行排序。对一个长为 n 的待排序的序列，我们将其分解成两个长度为n/2的子序列。每次先递归调用函数使两个子序列有序，然后我们再线性合并两个有序的子序列使整个序列有序。
  // 时间复杂度: O(nlogn)
  // 空间复杂度: O(nlogn)
  /**
function sortArray(nums) {
    const len = nums.length;
    if(len < 2) return nums;
    const mid = Math.floor(len / 2);
    const left = nums.slice(0,mid),right = nums.slice(mid);
    return merge(sortArray(left),sortArray(right));
}
function merge(left,right) {
    let ans = [];
    while(left.length && right.length) {
        if(left[0] < right[0]) {
            ans.push(left.shift());
        } else {
            ans.push(right.shift());
        }
    }
    while(left.length) ans.push(left.shift());
    while(right.length) ans.push(right.shift());
    return ans;
}
   * 
   */
// 17 数组去重   哈希
// 17.1 多元数组扁平化 、怎么判断是数组 2
  // object.prototype.tostring.call() // "[object String]" 表示是string
// 16 HTTP1, HTTP2, 
    /**
     * 1)http1.0和http1.1
     * a: 长连接: HTTP 1.0需要使用keep-alive参数来告知服务器端要建立一个长连接，而HTTP1.1默认支持长连接。HTTP是基于TCP/IP协议的，创建一个TCP连接是需要经过三次握手的,有一定的开销，如果每次通讯都要重新建立连接的话，对性能有影响。因此最好能维持一个长连接，可以用一个长连接来发多个请求。
     * b: 节约带宽: HTTP 1.1支持只发送header信息(不带任何body信息)，如果服务器认为客户端有权限请求服务器，则返回100，否则返回401。客户端如果接收到100，才开始把请求body发送到服务器。这样当服务器返回401的时候，客户端就可以不用发送请求body了，节约了带宽。另外HTTP还支持传送内容的一部分。这样当客户端已经有一部分的资源后，只需要跟服务器请求另外的部分资源即可。这是支持文件断点续传的基础。
     * c: host域:现在可以用web server（例如tomat），设置虚拟站点是非常常见的，也即是说，web server上的多个虚拟站点可以共享同一个ip和端口。HTTP1.0是没有host域的，HTTP1.1才支持这个参数。
     * 2)HTTP1.1与HTTP 2.0的主要区别
     * a:多路复用: 在HTTP/1.1协议中，浏览器客户端在同一时间针对同一域名的请求有一定数据限制。超过限制数目的请求会被阻塞。HTTP2.0使用了多路复用的技术，做到同一个连接并发处理多个请求，而且并发请求的数量比HTTP1.1大了好几个数量级。
     * b: 二进制分帧: 在不改动HTTP/1.x的语义、语法、状态吗、URI以及首部字段……的情况下，HTTP/2是如何作做到“突破HTTP1.1的性能限制，改进传输性能，实现低延迟和高吞吐量”的？关键之一就是在应用层（HTTP/2）和传输层（TCP or UDP）之间增加一个二进制分帧层。
     * c: 首部压缩: HTTP1.1不支持header数据的压缩，HTTP2.0使用HPACK算法对header的数据进行压缩，这样数据体积小了，在网络上传输就会更快。
     * c: 服务器推送: 服务端推送是一种在客户端请求之前发送数据的机制。在HTTP/2中，服务器可以对客户端的一个请求发送多个响应。Server Push 让HTTP1.x时代使用内嵌资源的优化手段变得没有意义；意思是说，当我们对支持HTTP2.0的web server请求数据的时候，服务器会顺便把一些客户端需要的资源一起推送到客户端，免得客户端再次创建连接发送请求到服务器端获取。这种方式非常合适加载静态资源。服务器推送可以缓存，并且在遵循同源的情况下，不同页面之间可以共享缓存。因此当客户端需要的数据已缓存时，客户端直接从本地加载这些资源就可以了，不用走网络，速度自然是快很多的。
     */
    // TCP与UDP区别总结：
    // 1、TCP面向连接（如打电话要先拨号建立连接）;UDP是无连接的，即发送数据之前不需要建立连接
    // 2、TCP提供可靠的服务。也就是说，通过TCP连接传送的数据，无差错，不丢失，不重复，且按序到达;UDP尽最大努力交付，即不保证可靠交付
    // 3、TCP面向字节流，实际上是TCP把数据看成一连串无结构的字节流;UDP是面向报文的
    // UDP没有拥塞控制，因此网络出现拥塞不会使源主机的发送速率降低（对实时应用很有用，如IP电话，实时视频会议等）
    // 4、每一条TCP连接只能是点到点的;UDP支持一对一，一对多，多对一和多对多的交互通信
    // 5、TCP首部开销20字节;UDP的首部开销小，只有8个字节
    // 6、TCP的逻辑通信信道是全双工的可靠信道，UDP则是不可靠信道
    
     
// HTTPS、常见的http状态码；
// 2xx （3种）
// 200 OK：表示从客户端发送给服务器的请求被正常处理并返回；
// 204 No Content：表示客户端发送给客户端的请求得到了成功处理，但在返回的响应报文中不含实体的主体部分（没有资源可以返回）；
// 206 Patial Content：表示客户端进行了范围请求，并且服务器成功执行了这部分的GET请求，响应报文中包含由Content-Range指定范围的实体内容。
// 3xx （5种）
// 301 Moved Permanently：永久性重定向，表示请求的资源被分配了新的URL，之后应使用更改的URL；
// 302 Found：临时性重定向，表示请求的资源被分配了新的URL，希望本次访问使用新的URL；
// 301与302的区别：前者是永久移动，后者是临时移动（之后可能还会更改URL）
// 303 See Other：表示请求的资源被分配了新的URL，应使用GET方法定向获取请求的资源；
// 302与303的区别：后者明确表示客户端应当采用GET方式获取资源
// 304 Not Modified：表示客户端发送附带条件（是指采用GET方法的请求报文中包含if-Match、If-Modified-Since、If-None-Match、If-Range、If-Unmodified-Since中任一首部）的请求时，服务器端允许访问资源，但是请求为满足条件的情况下返回改状态码；
// 307 Temporary Redirect：临时重定向，与303有着相同的含义，307会遵照浏览器标准不会从POST变成GET；（不同浏览器可能会出现不同的情况）；
// 4xx （4种）
// 400 Bad Request：表示请求报文中存在语法错误；
// 401 Unauthorized：未经许可，需要通过HTTP认证；
// 403 Forbidden：服务器拒绝该次访问（访问权限出现问题）
// 404 Not Found：表示服务器上无法找到请求的资源，除此之外，也可以在服务器拒绝请求但不想给拒绝原因时使用；
// 5xx （2种）
// 500 Inter Server Error：表示服务器在执行请求时发生了错误，也有可能是web应用存在的bug或某些临时的错误时；
// 503 Server Unavailable：表示服务器暂时处于超负载或正在进行停机维护，无法处理请求

/** 
 * 1) https和http
   区别:HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，要比http协议安全。、
   /** *
    * 客户端在使用HTTPS方式与Web服务器通信时有以下几个步骤
    (1）客户使用https的URL访问Web服务器，要求与Web服务器建立SSL连接。
　　（2）Web服务器收到客户端请求后，会将网站的证书信息（证书中包含公钥）传送一份给客户端。
　　（3）客户端的浏览器与Web服务器开始协商SSL连接的安全等级，也就是信息加密的等级。
　　（4）客户端的浏览器根据双方同意的安全等级，建立会话密钥，然后利用网站的公钥将会话密钥加密，并传送给网站。
　　（5）Web服务器利用自己的私钥解密出会话密钥。
　　（6）Web服务器利用会话密钥加密与客户端之间的通信
    https的优点:
    (1）使用HTTPS协议可认证用户和服务器，确保数据发送到正确的客户机和服务器；
　　（2）HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，要比http协议安全，可防止数据在传输过程中不被窃取、改变，确保数据的完整性。
　　（3）HTTPS是现行架构下最安全的解决方案，虽然不是绝对安全，但它大幅增加了中间人攻击的成本。
　　（4）谷歌曾在2014年8月份调整搜索引擎算法，并称“比起同等HTTP网站，采用HTTPS加密的网站在搜索结果中的排名将会更高”。
    HTTPS的缺点
　　虽然说HTTPS有很大的优势，但其相对来说，还是存在不足之处的：
　　（1）HTTPS协议握手阶段比较费时，会使页面的加载时间延长近50%，增加10%到20%的耗电；
　　（2）HTTPS连接缓存不如HTTP高效，会增加数据开销和功耗，甚至已有的安全措施也会因此而受到影响；
　　（3）SSL证书需要钱，功能越强大的证书费用越高，个人网站、小网站没有必要一般不会用。
　  (4）SSL证书通常需要绑定IP，不能在同一IP上绑定多个域名，IPv4资源不可能支撑这个消耗。
　　（5）HTTPS协议的加密范围也比较有限，在黑客攻击、拒绝服务攻击、服务器劫持等方面几乎起不到什么作用。最关键的，SSL证书的信用链体系并不安全，特别是在某些国家可以控制CA根证书的情况下，中间人攻击一样可行。
   */
  /**
   * Referrer Policy:
   * 当一个用户点击当页面的一个链接时,然后跳转到目标页面，目标页面就会收到一个信息，即用户是从哪个链接过来的，这时referer字段就起了这么一个作用，指出来源网站的URL
   * 浏览器向服务器请求资源的时候，Referer字段的逻辑时这样的，用户在地址栏输入网址，或者选中浏览器书签，就不发送Referer字段。
    主要是以下三种场景，会发送Referer字段
    1)用户点击网页上的链接
    2)用户发送表单
    3)网页加载静态资源,比图加载图片、脚本、样式
  隐私
  在社交网站的个人界面上，用户点击页面的某个外链，这时可能会将自己个人页面的URL暴露在referer字段中，URL里面往往带有用户数据和一些敏感信息。这时候可以选择不显示来源页面URL信息或者定制Referer字段，让它只显示一个网站根地址hostname，让对方知道时我贡献了你的流量
  Referrer-Policy可以设置8个值:
  /
  enum ReferrerPolicy {
  "", // 若设为空串则默认按照浏览器的机制设置referrer的内容，默认情况下是和no-referrer-when-downgrade设置得一样。明出处。
  "no-referrer", // 不发送Referer字段
  "no-referrer-when-downgrade", // 如果从 HTTPS 网址链接到 HTTP 网址，不发送Referer字段，其他情况发送（包括 HTTP 网址链接到 HTTP 网址）。这是浏览器的默认行为。。
  "same-origin", // 链接到同源网址（协议+域名+端口 都相同）时发送，否则不发送。注意，https://foo.com链接到http://foo.com也属于跨域。
  "origin", // Referer字段一律只发送源信息（协议+域名+端口），不管是否跨域。
  "strict-origin", // 如果从 HTTPS 网址链接到 HTTP 网址，不发送Referer字段，其他情况只发送源信息。
  "origin-when-cross-origin", // 当发请求给同源网站时，浏览器会在referrer中显示完整的URL信息，发个非同源网站时，则只显示源地址（协议、域名、端口）
  "strict-origin-when-cross-origin", // 同源时，发送完整的Referer字段；跨域时，如果 HTTPS 网址链接到 HTTP 网址，不发送Referer字段，否则发送源信息。
  "unsafe-url" // 浏览器总是会将完整的URL信息显示在referrer字段中，无论请求发给任何网站。

};
  /




   * **/
  


// 17.2 AMD 和 CMD 规范的区别？
    /**
     * .AMD规范
        AMD是"Asynchronous Module Definition"的缩写，意思就是"异步模块定义"。它采用异步方式加载模块，模块的加载不影响它后面语句的运行。所有依赖这个模块的语句，都定义在一个回调函数中，等到加载完成之后，这个回调函数才会运行。AMD也采用require()语句加载模块，但是不同于CommonJS，它要求两个参数：require([module], callback);第一个参数[module]，是一个数组，里面的成员就是要加载的模块；第二个参数callback，则是加载成功之后的回调函数。
      .CMD规范
      cmd的全称是Common Module Definition，即通用模块定义，其提供了模块定义和按需加载执行模块。该规范明确了模块的基本书写格式和基本的交互规则。在 CMD 规范中，一个模块就是一个文件。代码的书写格式如下：define(factory);这里的define是一个全局函数，用来定义模块，这里的factory参数既可以是函数，又可以是字符串或对象
      4.两者区别
      AMD 通过 require.js实现 
      CMD 通过 sea.js实现
      1. 对于依赖的模块，AMD 是提前执行，CMD 是延迟执行。不过 RequireJS 从 2.0 开始，也改成可以延迟执行（根据写法不同，处理方式不同）。CMD 推崇 as lazy as possible.
      2. CMD 推崇依赖就近，AMD 推崇依赖前置。看代码：
      // CMD
        define(function(require, exports, module) {
        var a = require('./a')
        a.doSomething()
        // 此处略去 100 行
        var b = require('./b') // 依赖可以就近书写
        b.doSomething()
        // ... 
        })

        // AMD 默认推荐的是
        define(['./a', './b'], function(a, b) { // 依赖必须一开始就写好
        a.doSomething()
        // 此处略去 100 行
        b.doSomething()
        ...
        })
     */
// 18 前端跨域、浏览器缓存、cookie, session, token, localstorage, sessionstorage
        /**1）前端跨域
         * a)、JSONP
         * b)、普通跨域请求：只服务端设置Access-Control-Allow-Origin即可，前端无须设置
         * 2) 浏览器缓存
         * a：http缓存
         *    a1:强缓存: 不会向服务器发送请求,直接从缓存中读取资源
         *      a11: expires(http/1.0,时间格式GMT),表示相应头里的过期时间,浏览器再次加载资源时如果在时间之内在命中缓存。
         *      a12: cache-control(http/1.1,单位 秒); max-age(表示缓存内容在 xx秒后消失),no-store(所有内容都不会被缓存)
         *    a2: 当协商缓存生效时,返回304和Not Modified，它指的是强制缓存失效后,浏览器携带缓存标示向服务器发起请求,由服务器决定是否需要使用缓存。
         *      a21: Last-Modified和 If-Modified-Since: Last-Modifeds是服务器返回资源同时在header添加的,表示这个资源在服务器上最后修改时间,浏览器接受后缓存文件和header,
         * 浏览器下次请求时，检测是否有Last-Modified字段,如果存在则在请求头添加 If-modified-Since该字段值就是上次服务器返回的值,如果没有变化则返回304直接从缓存中读取，否则返回新资源。
         *      a22: ETag和If-None-Match: Etag是上一次加载资源时,服务器返回的。它的作用是唯一用来标示资源是否有变化,浏览器下次请求时将ETag值传入If-None-Match中,服务端匹配传入的值与上次是否一致，如果一致返回304否则返回新资源和新的ETag
         * 顺序的话是先判断 Cache-Control／Expires，再 ETag，最后 Last-Modified，都满足就 304，有一项不满足就 200
         * 3)localStorage:在前端设置,可以减少数据请求，长期存储。
         * 4)sessionStorage: 在前端设置，只存在当前会话中即重新打开浏览器则数据消失
         * 5)cookie:在后端设置,保存在客户端本地文件,通过set-cookie设置且Cookie的内容自动在请求的时候被传递到服务器。
         * 6)session: 放在服务器上,相比于cookie来说他更安全,HTTP 协议是一种无状态协议，即每次服务端接收到客户端的请求时，都是一个全新的请求，服务器并不知道客户端的历史请求记录；Session 和 Cookie 的主要目的就是为了弥补 HTTP 的无状态特性。
         *     Session 如何判断是否是同一会话： 服务器第一次接收到请求时，开辟了一块 Session 空间（创建了Session对象），同时生成一个 sessionId ，并通过响应头的 **Set-Cookie：JSESSIONID=XXXXXXX **命令，向客户端发送要求设置 Cookie 的响应； 客户端收到响应后，在本机客户端设置了一个 **JSESSIONID=XXXXXXX **的 Cookie 信息，该 Cookie 的过期时间为浏览器会话结束；
         *     Session 的缺点:Session 机制有个缺点，比如 A 服务器存储了 Session，就是做了负载均衡后，假如一段时间内 A 的访问量激增，会转发到 B 进行访问，但是 B 服务器并没有存储 A 的 Session，会导致 Session 的失效。
         * 7) token：Json Web Token 的简称就是 JWT，通常可以称为 Json 令牌。它是RFC 7519 中定义的用于安全的将信息作为 Json 对象进行传输的一种形式。JWT 中存储的信息是经过数字签名的，因此可以被信任和理解。可以使用 HMAC 算法或使用 RSA/ECDSA 的公用/专用密钥对 JWT 进行签名。使用 JWT 主要用来下面两点认证(Authorization)：这是使用 JWT 最常见的一种情况，一旦用户登录，后面每个请求都会包含 JWT，从而允许用户访问该令牌所允许的路由、服务和资源。单点登录是当今广泛使用 JWT 的一项功能，因为它的开销很小。
信息交换(Information Exchange)：JWT 是能够安全传输信息的一种方式。通过使用公钥/私钥对 JWT 进行签名认证。此外，由于签名是使用 head 和 payload 计算的，因此你还可以验证内容是否遭到篡改。
         * **/
// 19 mvvm模式、mvc模式理解；
/** MVC
 * 1、View 传送指令到 Controller
   2、Controller 完成业务逻辑后，要求 Model 改变状态
   3、Model 将新的数据发送到 View，用户得到反馈:所有通信都是单向的。

  // 比如:
   a. 用户可以向 View 发送指令（DOM 事件），再由 View 直接要求 Model 改变状态。
   b. 用户也可以直接向 Controller 发送指令（改变 URL 触发 hashChange 事件），再由 Controller 发送给 View。
   c. Controller 非常薄，只起到路由的作用，而 View 非常厚，业务逻辑都部署在 View。所以，Backbone 索性取消了 Controller，只保留一个 Router（路由器） 。
  MVP:
  1. 各部分之间的通信，都是双向的。
  2. View 与 Model 不发生联系，都通过 Presenter 传递。
  3. View 非常薄，不部署任何业务逻辑，称为"被动视图"（Passive View），即没有任何主动性，而 Presenter非常厚，所有逻辑都部署在那里。
  MVVM： 模式将 Presenter 改名为 ViewModel，基本上与 MVP 模式完全一致。
  唯一的区别是，它采用双向绑定（data-binding）：View的变动，自动反映在 ViewModel，反之亦然。Angular 和 Ember 都采用这种模式。

 */

//  vue diff ssr 路由守卫 性能优化
/** diff:diff算法就是进行虚拟节点对比，并返回一个patch对象，用来存储两个节点不同的地方，最后用patch记录的消息去局部更新Dom。
 * SSR：服务器渲染
    1、利用SEO（搜索引擎）
    2、页面渲染时间短
    3、服务器压力过大
 * 路由守卫：就是进入当前路由前，有个人“门卫”进行保护，也可以理解为“安检”。在Vue组件里有个函数叫作：beforeRouteEnter。就是完成路由守卫的，表示进入当前路由前要做什么？
 * beforeRouteEnter 函数的执行时机，当点击路由连接时，进入组件时，组件还没有显示时执行，这个方法里有三个入参
    2、to：表示当前路由，即要进入的路由
    3、from：表示从哪来的，
    4、next() 表示下一步要干啥，next('/addGoods')就表示下一步，调到路由 /addGoods
   VUE性能优化:
    1.把不常改变的库放到 index.html 中，通过 cdn 引入
    2.vue 路由的懒加载
    3.不生成 map 文件: 找到 config/index.js，修改为 `productionSourceMap: false
    4.vue 组件尽量不要全局引入
    5.使用更轻量级的工具库
    6.开启gzip压缩
 * /

// 20 vue 中 computed和watch的区别？
// watch 为了监听某个响应数据的变化。computed 是自动**监听依赖值**的变化，从而动态返回内容，主要目的是简化模板内的复杂运算。所以区别来源于用法，只是需要动态值，那就用 computed ；需要知道值的改变后执行业务逻辑，才用 watch。
// 生命周期内create和mounted的区别
// created:在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图。
   mounted:在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作。 
// 21 vue  父子组件通信 
组件的props属性用于接收父组件传递的信息. 而子组件想要向父组件传递信息, 可以使用$emit事件.
兄弟之间通信: eventBus，vuex
// 22 vue数据双向绑定原理；
    vue.js 是采用数据劫持结合发布者-订阅者模式的方式，通过 Object.defineProperty()来劫持各个属性的 setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。
具体步骤：
第一步：需要 observe 的数据对象进行递归遍历，包括子属性对象的属性，都加上 setter 和 getter 这样的话，给这个对象的某个值赋值，就会触发 setter，那么就能监听到了数据变化
第二步：compile 解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，更新视图
第三步：Watcher 订阅者是 Observer 和 Compile 之间通信的桥梁，主要做的事情是:在自身实例化时往属性订阅器(dep)里面添加自己自身必须有一个 update()方法，待属性变动 dep.notice()通知时，能调用自身的 update() 方法，并触发 Compile 中绑定的回调，则功成身退。
第四步：MVVM 作为数据绑定的入口，整合 Observer、Compile 和 Watcher 三者，通过 Observer 来监听自己的 model 数据变化，通过 Compile 来解析编译模板指令，最终利用 Watcher 搭起 Observer 和 Compile 之间的通信桥梁，达到数据变化 -> 视图更新；视图交互变化(input) -> 数据 model 变更的双向绑定效果。
//   如何让CSS只在当前组件中起作用?
  // 在组件中的style前面加上scoped就可以了
// 响应式系统简述:
  *   任何一个 Vue Component 都有一个与之对应的 Watcher 实例
  *   Vue 的 data 上的属性会被添加 getter 和 setter 属性
  *   当 Vue Component render 函数被执行的时候, data 上会被 触碰(touch), 即被读, getter 方法会被调用, 此时 Vue 会去记录此 Vue component 所依赖的所有 data。(这一过程被称为依赖收集)
  *   data 被改动时（主要是用户操作）, 即被写, setter 方法会被调用, 此时 Vue 会去通知所有依赖于此 data 的组件去调用他们的 render 函数进行更新
//  如何获取dom?
    // 用ref
// 22.1 Proxy 与 Object.defineProperty 优劣对比
     proxy的优势:
      Proxy 可以直接监听对象而非属性；
      Proxy 可以直接监听数组的变化；
      Proxy 有多达 13 种拦截方法,不限于 apply、ownKeys、deleteProperty、has 等等是 Object.defineProperty 不具备的；
      Proxy 返回的是一个新对象,我们可以只操作新的对象达到目的,而 Object.defineProperty 只能遍历对象属性直接修改；
      Proxy 作为新标准将受到浏览器厂商重点持续的性能优化，也就是传说中的新标准的性能红利；
    Object.defineProperty 的优势如下:
    兼容性好，支持 IE9，而 Proxy 的存在浏览器兼容性问题,而且无法用 polyfill 磨平，因此 Vue 的作者才声明需要等到下个大版本( 3.0 )才能用 Proxy 重写。
// 22.2  v-for 和 v-if 优先级 
v-for和v-if不应该一起使用，必要情况下应该替换成computed属性。
原因：v-for比v-if优先，如果每一次都需要遍历整个数组，将会影响速度，尤其是当之需要渲染很小一部分的时候。
// 22.3 vue路由hash模式和history模式实现原理分别是什么，他们的区别是什么？
  Hash 模式:
  Hash 模式的工作原理是onhashchange事件，Window对象可以监听这个事件...
  可以通过改变路径的哈希值，来实现历史记录的保存，发生变化的hash 都会被浏览器给保存下来，所以下次尽管浏览器没有请求服务器，但是还是将页面和url 给关联起来，这就是所谓的前端路由。
  每次或者了哈希值，就知道路径，知道路径，就能获得路由组建，有了路由组建，就可以将页面显示出来。
  History 模式:
  通过浏览器保存历史路径，由于Hash模式，每次只能改变#后面的路径参数，history 则给予了前端路由完全的自由。
  通过api 取访问历史路径，history,back(),forward(),go(),实现了页面的回退，前进，以及跳转，
  在vue.js中也可以用$router.push(url), $router.replace(),$router.back(),
  $router.push(url) 是一层一层退，（数据结构是栈）
  $router.replace,是直接替换它不会向 history 添加新记录。
// 22.4 说说vue和react的异同
    两者的本质区别
    1.vue本质是MVVM框架，是由MVC发展而来。
    2.React本质是前端组件化框架，是由后端组件化发展而来。
    模板的区别
    1.vue使用模板--（最初由angular提出）
    2.React使用JSX模板，现在已经趋向标准化，完全可以独立出来使用。
    从学习成本来说：JSX模板更简单，只需要知道{ }里是js语法，vue模板v-if,v-else指令需要学习。
    从模板逻辑分离角度考虑：JSX模板和JS逻辑混在一起，没有分开，容易造成混乱。
    3.组件化的区别
    React本身就是组件化，没有组件化就不是React
    vue也支持组件化，不过是在MVVM上的扩展
    4.两者的共同点
    都支持组件化
    都是数据驱动视图
// 23 修饰器 或 修饰器的作用
   // 装饰器是可以同时应用多个的
   // @decorator1
   // @decorator2
    class { }
  执行的顺序为decorator2 -> decorator1，离class定义最近的先执行。
  // 在项目中我使用的话我通常会把装饰器放在某个类的前面，比如一些日志记录，以及路由前缀
// 24 对象的深浅拷贝
   // 浅: 复制操作，object.assgin,修改赋值后的对象b的非对象属性，不会影响原对象a的非对象属性；修改赋值后的对象b的对象属性，却会影响原对象a的对象属性
   // 深: JSON.parse(JSON.stringify) , 递归
     
// 25 express 
  // 25.1 注册路由时 app.get、app.use、app.all 的区别是什么？
     1、app.get/post/put 。。。
    （1）区别请求方法，get/post/put等请求必须一一对应上，才能匹配到
    （2）请求路径pathname必须和 /xxx 完全匹配
      2、app.use
      （1）在进行路由匹配的时候，它不区别请求方法，Http请求的get、post、put、delete方法都可以进行匹配
      （2）请求路径中的第一部分只要与 /register 相等即可，并不要求请求路径pathname完全匹配
      3、app.all
      （1）它和app.use一样，在进行路由匹配的时候，它不区别请求方法，Http请求的get、post、put、delete方法都可以进行匹配
      （2）请求路径pathname必须和 /xxx 完全匹配
        // 25.2 express response有哪些常用方法?
            res.end:结束response - 如果服务端没有数据回传给客户端则可以直接用res.end返回，以此来结束响应过程
            res.send:如果服务端有数据可以使用res.send,可以忽略res.end，body参数可以是一个Buffer对象，一个String对象或一个Array
            res.render:res.render用来渲染模板文件，也可以结合模版引擎来使用，下面看个简单的demo (express+ejs模版引擎)
            res.redirect:重定义到path所指定的URL，同时也可以重定向时定义好HTTP状态码（默认为302）
        // 25.3 node如何利用多核CPU以及创建集群? 两个node程序之间怎样交互?
          Node.js给我们提供了cluster模块，用于nodejs多核处理，同时可以通过它来搭建一个用于负载均衡的node服务集群。Master 通过 cluster.fork()这个方法创建的
          两个node程序间交互: 通过socket: 通过fork，上面讲过了．原理是子程序用process.on来监听父程序的消息，用 process.send给子程序发消息，父程序里用child.on,child.send进行交互，来实现父进程和子进程互相发送消息
koa和express的区别
    1. 语法区别
    experss 异步使用 回调
    koa1 异步使用 generator + yeild
    koa2 异步使用 await/async
    2. 中间件区别
    koa采用洋葱模型，进行顺序执行，出去反向执行，支持context传递数据
    express本身无洋葱模型，需要引入插件，不支持context
    express的中间件中执行异步函数，执行顺序不会按照洋葱模型，异步的执行结果有可能被放到最后，response之前。
    这是由于，其中间件执行机制，递归回调中没有等待中间件中的异步函数执行完毕，就是没有await中间件异步函数
    3. 集成度区别
    express 内置了很多中间件，集成度高，使用省心，
    koa 轻量简洁，容易定制
//  node 

// 你了解node多进程吗  进程和线程的区别
   我们启动一个服务、运行一个实例，就是开一个服务进程，一个线程只能隶属于一个进程，但是一个进程是可以拥有多个线程的
   在单核 CPU 系统之上我们采用 单进程 + 单线程 的模式来开发。在多核 CPU 系统之上，可以通过 child_process.fork 开启多个进程（Node.js 在 v0.8 版本之后新增了Cluster 来实现多进程架构） ，即 多进程 + 单线程 模式。注意：开启多进程不是为了解决高并发，主要是解决了单进程模式下 Node.js CPU 利用率不足的情况，充分利用多核 CPU 的性能。
// node进程中怎么通信
    // 进程间通信一般通过共享内存的方式实现的，使得多个进程可以访问同一块内存空间
    有两种通信方式: 1、通过sockets 2、通过消息队列
// node可以开启多线程吗
    // worker_threads 极大的提升了cpu利用率，提高了程序的运行性能。但使用过程中需要合理控制。

// 26 react 
  // react核心 
    1、组件 2、JSX    3、Props & State 4、组件API   5、组件类型
  // react单向数据流怎么理解
   // 父传子:数据只能从父组件传向子组件，反过来则不行,单向数据流是react规范的数据流向,它的作用是极大的降低了我们组件间通信的代码耦合，让组件间的通信更为清晰，debug直接往props中找。
      也就是说，基于react严谨且周密的编程思想，制订了单向数据流这样的通信约束，使得我们react项目中的数据传递结构稳定且不易耦合，而react在这方面的处理，就是直接规定了(对组件而言，它的)props是只读的，而不是可更改的；
想对而言，小程序和vue对props的限制上显得更加自由
   // 子传父: 父组件中定义函数，通过props传递给子组件，子组件调用这个函数并传参。
   // 子孙之间隔得比较长的通信: 
      1) 通过context
      2）通过缓存  ：  组件A把数据存到缓存中，组件B就可以从中取出; 
      3）通过url  ：  通过location对象拿到…；
      4) 通过与后端配合： 组件A把数据扔到接口里去，组件B可以从中拿到…；
   // 兄弟之间通信: eventbus
  
// 与app之间的通信
   可以用 intent url 来唤起，但要求 webview 实现 shouldOverrideUrlLoading() ，解析 uri，找到对应的 activity，然后启动。
// 27 flutter 
// Dart 多任务如何并行的？
   // Dart的多线程和前端的多线程有很多的相似之处。Flutter的多线程主要依赖Dart的并发编程、异步和事件驱动机制。
// Flutter 特性有哪些 ？
   // 跨平台： 安卓、IOS都可运行
   // 热重载: 这个不要理解为热修复啊，不是这个，热重载指的是在开发阶段我们只要 Control + s 保存就能直接在设备上更新代码了
   
// Flutter 中的生命周期
   // 初始化 initState > didChangeDependencies > build , 此时页面加载完成。
   // 状态变化 didUpdateWidget
   // 组件移除 deactivate > dispose
   /***
    * initState：插入渲染树时调用，只调用一次，widget创建执行的第一个方法，可以再里面初始化一些数据，以及绑定控制器 如下
      didChangeDependencies：当State对象的依赖发生变化时会被调用；例如：在之前build() 中包含了一个InheritedWidget，然后在之后的build() 中InheritedWidget发生了变化，那么此时InheritedWidget的子widget的didChangeDependencies()回调都会被调用。InheritedWidget这个widget可以由父控件向子控件共享数据，案例可以参考 scoped_model开源库。
      build ：它主要是用于构建Widget子树的，调用次数：多次，初始化之后开始绘制界面，当setState触发的时候会再次被调用
      didUpdateWidget：组件状态改变时候调用，可能会调用多次
      deactivate:当State对象从树中被移除时，会调用此回调。
      dispose():当State对象从树中被永久移除时调用；通常在此回调中释放资源。
      reassemble：此回调是专门为了开发调试而提供的，在热重载(hot reload)时会被调用，此回调在Release模式下永远不会被调用。
      几个注意点
    */
// Flutter 和 Dart的关系是什么？
// flutter框架是使用dart作为其编程语言的,就好像vue是js作为变成语言


// 进阶
// 项目中遇到的问题 以及怎么解决的
  /**
   * 1、接口页面主接口的出惨很多、在计日志的时候没有把整个出参记录下来，因为数据量太大、占用服务器的资源比较多，有个逻辑是依赖某个关键字段的，
   * 比如是否给用户充值红包，这时候有用户反应没有充值到红包、让排查原因，但是没有日志，后面自己的优化是把单独的关键子提取出来，记录下这条日志，
   * 这样就不占用服务器空间
   * 2、页面的点击事件很多，点击方法就会混乱，这时每个dom放一个ckickType，点击的时候都执行同一个方法，然后在然后通过type来执行不同的逻辑，易于维护
   * 3、js和Java的不同点，当一个底层接口依赖多个接口的时候，预发后取的方式，项目中一个页面的主接口都依赖二三十个接口了，这时候我采用预发后取的方式，充分利用js异步特性，先发送所有请求，然后在后面处理数据的时候按照
   * 接口的接口的依赖关系以及接口的时间await，node支持的传输的最长数字为15位、而Java有long结构的数据类型
   * 4、小程序里面请求是采用回调的方式，这样写法不太友好，这时候自己采用promise封装一下
   * 5、拆包不支持用现有的框架，需要自己从0到1分装一套数据请求，业务打点和技术打点以及前端监控
   * /
// 事件代理(事件委托)
/**
 * 
 * 
  1、js中事件冒泡我们知道，子元素身上的事件会冒泡到父元素身上。
  2、事件代理就是，本来应该加在子元素身上的事件，我们却把事件加在了其父级身上。
  3、那就产生了问题：父级那么多子元素，怎么区分事件本应该是哪个子元素的？
  4、答案是：event对象里记录的有“事件源”，它就是发生事件的子元素。
  5、 它存在兼容性问题，在老的IE下，事件源是 window.event.srcElement，其他浏览器是 event.target
  6、用事件委托有什么好处呢？
  7、第一个好处是效率高，比如，不用for循环为子元素添加事件了
  8、第二个好处是，js新生成的子元素也不用新为其添加事件了，程序逻辑上比较方便
 * **/
// 手写EventEmitter(发布订阅模式--简单版)
// 发布订阅模式
  /**class EventEmiter {
    constructor() {
      // 事件对象，存放订阅的名字和事件  如:  { click: [ handle1, handle2 ]  }
      this.events = {}
    }
    // 订阅事件的方法
    on(eventName, callback) {
      if (!this.events[eventName]) {
        // 一个名字可以订阅多个事件函数
        this.events[eventName] = [callback]
      } else {
        // 存在则push到指定数组的尾部保存
        this.events[eventName].push(callback)
      }
    }
    // 触发事件的方法
    emit(eventName, ...rest) {
      // 遍历执行所有订阅的事件
      this.events[eventName] &&
        this.events[eventName].forEach(f => f.apply(this, rest))
    }
    // 移除订阅事件
    remove(eventName, callback) {
      if (this.events[eventName]) {
        this.events[eventName] = this.events[eventName].filter(f => f != callback)
      }
    }
    // 只执行一次订阅的事件，然后移除
    once(eventName, callback) {
      // 绑定的时fn, 执行的时候会触发fn函数
      const fn = () => {
        callback() // fn函数中调用原有的callback
        this.remove(eventName, fn) // 删除fn, 再次执行的时候之后执行一次
      }
      this.on(eventName, fn)
    }
  }
  const event = new EventEmitter()
  const handle = (...pyload) => console.log(pyload)
  event.on('click', handle)
  event.emit('click', 100, 200, 300, 100)
  event.remove('click', handle)
  event.once('dbclick', function() {
    console.log('click')
  })
  event.emit('dbclick', 100) **/
// call/apply的区别
   // apply 可传数组、对象（传对象的时候该入参是undefined）
   // call传对应的值
// new运算符原理
  /**
   *1、新生成一个对象
    2、链接到原型
    3、绑定this
    4、返回新对象（如果构造函数有自己 retrun 时，则返回该值）
   * / 
// 什么是闭包？闭包的作用是什么
  /**
   * 「函数」和「函数内部能访问到的变量」（也叫环境）的总和，就是一个闭包。闭包是 JS 函数作用域的副产品。
   * 闭包会造成内存泄露？错: 说这话的人根本不知道什么是内存泄露。内存泄露是指你用不到（访问不到）的变量，依然占居着内存空间，不能被再次利用起来。
闭包里面的变量明明就是我们需要的变量（lives），凭什么说是内存泄露？这个谣言是如何来的？因为 IE。IE 有 bug，IE 在我们使用完闭包之后，依然回收不了闭包里面引用的变量。
这是 IE 的问题，不是闭包的问题
   * /
/**
 * 柯里化
 * 这时就需要函数柯里化了。所谓"柯里化"，就是把一个多参数的函数，转化为单参数函数。
 * 维基百科: 把接收多个参数的函数变换成接收一个单一参数（最初函数的第一个参数）的函数，并返回接受剩余的参数而且返回结果的新函数的技术。其由数学家Haskell Brooks Curry提出，并以curry命名。 
 * // 柯里化之前
    function add(x, y) {
      return x + y;
    }
    add(1, 2) // 3
    // 柯里化之后
    function addX(y) {
      return function (x) {
        return x + y;
      };
    }
  addX(2)(1) // 3
  // 利用闭包和函数柯里化来解决add(1)(2)(3)() 和add(1,2,3)
  function add(...arg) {
    var a = [...arg];
    _add = function (...innerArg) {
      if (innerArg.length === 0) {
        return a.reduce(function (a, b) { return a + b })
      } else {
        // a = a.concat(innerArg);
        [].push.apply(a, innerArg)
        return _add;
      }
    }
    return _add
  }

add(1)(2)(3)()    // 6
// 柯里化二
function add () {
    var args = Array.prototype.slice.call(arguments);
    var fn = function () {
        var fn_args = Array.prototype.slice.call(arguments);
        return add.apply(null, args.concat(fn_args));
    };
    fn.valueOf = function () {
        return args.reduce(function (a, b) {
            return a + b;
        });
    };
    return fn;
}
// 也可以这么写
function add(...arg) {
    let a = [...arg];
    const _add = (...innerArg) => {
        a = a.concat(innerArg);
        return _add;
    }
    _add.sum = () => a.reduce((a,b) => a+b);
    return _add;
}
// 闭包实现1-100求和
/**
 * function sum() {
    var result = 0;
    var i = 1;
    return function calc() {
      result += i++;
      return i > 100 ? result : calc();
    }();
}
var result = sum();
console.log(result);
 * **/
// Object.create 作用
 /**
  * new Object() 通过构造函数来创建对象, 添加的属性是在自身实例下。
    Object.create() es6创建对象的另一种方式，可以理解为继承一个对象, 添加的属性是在原型下。
    // new Object() 方式创建
    var a = {  rep : 'apple' }
    var b = new Object(a)
    console.log(b) // {rep: "apple"}
    console.log(b.__proto__) // {}
    console.log(b.rep) // {rep: "apple"}

    // Object.create() 方式创建
    var a = { rep: 'apple' }
    var b = Object.create(a)
    console.log(b)  // {}
    console.log(b.__proto__) // {rep: "apple"}
    console.log(b.rep) // {rep: "apple"}
  * /
// 前端错误监控以及上报
/**
 * 1、带发送的日志放在内存里面、超过小程序允许的内存阈值之后，放在缓存里面，发送成功之后就把缓存里面的这条对应的日志删除
*/
// less,sass 区别
 /**1、Sass基于Ruby，需要安装Ruby
  * 2、Sass使用$，而Less使用@
  * 3、在Sass中，我们可以遍历任何类型的数据。但在Less中，我们只能使用递归函数循环数值。
  * 
  * /
// vue-loader是什么？使用它的用途有哪些？
/**
 * vue-loader：解析和转换 .vue 文件，提取出其中的逻辑代码 script、样式代码 style、以及 HTML 模版 template，再分别把它们交给对应的 Loader 去处理。
   css-loade：加载由 vue-loader 提取出的 CSS 代码。
   vue-template-compiler：把 vue-loader 提取出的 HTML 模版编译成对应的可执行的 JavaScript 代码，这和 React 中的 JSX 语法被编译成 JavaScript 代码类似。预先编译好 HTML 模版相对于在浏览器中再去编译 HTML 模版的好处在于性能更好。
   总结;vue-loader的作用就是提取。
 * /
//  vue 中的key作用 ， 第一次页面加载会触发哪几个钩子？
/**
 * key:所以一句话，**key的作用主要是为了高效的更新虚拟DOM**。另外vue中在使用相同标签名元素的过渡切换时，也会使用到key属性，其目的也是为了让vue可以区分它们，
 * 第一次加载页面会触发哪几个钩子:第一次页面加载时会触发 beforeCreate, created, beforeMount, mounted 这几个钩子
 * /
// vuex有哪几种属性
/**
 * 
  vuex是什么: vuex是一个专为vue.js应用程序开发的状态管理模式（它采用集中式存贮管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化）。
  vuex有哪几种属性： 有 5 种，分别是 state、getter、mutation、action、module
  vuex的数据传递流程；当组件进行数据修改的时候我们需要调用dispatch来触发actions里面的方法。actions里面的每个方法中都会有一个commit方法，当方法执行的时候会通过commit来触发mutations里面的方法进行数据的修改。mutations里面的每个函数都会有一个state参数，这样就可以在mutations里面进行state的数据修改，当数据修改完毕后，会传导给页面。页面的数据也会发生改变。
  为什么要用vuex:对于问题三，由于传参的方法对于多层嵌套的组件将会非常繁琐，并且对于兄弟组件间的状态传递无能为力。我们经常会采用父子组件直接引用或者通过事件来变更和同步状态的多份拷贝。以上的这些模式非常脆弱，通常会导致代码无法维护。所以我们需要把组件的共享状态抽取出来，以一个全局单例模式管理。在这种模式下，我们的组件树构成了一个巨大的“视图”，不管在树的哪个位置，任何组件都能获取状态或者触发行为！另外，通过定义和隔离状态管理中的各种概念并强制遵守一定的规则，我们的代码将会变得更结构化且易维护。
 * /
// params和query的区别
/**
 * 1、用法：query要用path来引入，params要用name来引入，接收参数都是类似的，分别是this.route.query.name和this.route.query.name和this.route.query.name和this.route.params.name。
注意接收参数的时候，已经是route而不是route而不是route而不是router
  2、展示上
  query更加类似于我们ajax中get传参，params则类似于post，说的再简单一点，前者在浏览器地址栏中显示参数，后者则不显示
 * 
*/
/**
 * /* 显示一行，省略号 */
 
//  white-space: nowrap;
//  text-overflow: ellipsis;
//  overflow: hidden;
//  word-break: break-all;

// /* 显示两行，省略号 */

// text-overflow: -o-ellipsis-lastline;
// overflow: hidden;
// text-overflow: ellipsis;
// display: -webkit-box;
// -webkit-line-clamp: 2;
// line-clamp: 2;
// -webkit-box-orient: vertical;
/**
 * vue模块懒加在、写法和和路由懒加载的类似
 * components:{
    "One-com":resolve=>(['./one'],resolve)
  }
 * 
 * 
 * 
// vue组件中data为什么必须是一个函数？
/**
 * vue的核心就是：数据驱动、组件系统那么既然是组件，就会被n次调用。每次调用都需要返回独立的数据空间。各个组件实例维护各自的数据，不会影响其他组件的数据。
如果是单纯的写个对象，可能就会产生所有组件，共用一份data数据的结果
 * /
//  前端构建工具知多少  webpack的基本配置 webpack构建流程  常用的 loader plugin 
/**
 * 六个核心概念：
Entry，入口，这是Webpack执行构建的第一步，可理解为输入。
Module，模块，在Webpack中一切皆模块，一个模块即为一个文件。Webpack会从Entry开始递归找出所有的依赖模块。
Chunk，代码块，一个Chunk由多个模块组合而成，它用于代码合并与分割。
Loader，模块转换器，用于将模块的原内容按照需求转换成新内容。
Plugin，扩展插件，在Webpack构建过程的特定时机注入扩展逻辑，用来改变或优化构建结果。
Output，输出结果，源码在Webpack中经过一系列处理后而得出的最终结果。
Webpack构建流程：
Webpack在启动后，会从Entry开始，递归解析Entry依赖的所有Module，每找到一个Module，就会根据Module.rules里配置的Loader规则进行相应的转换处理，对Module进行转换后，再解析出当前Module依赖的Module，这些Module会以Entry为单位进行分组，即为一个Chunk。因此一个Chunk，就是一个Entry及其所有依赖的Module合并的结果。最后Webpack会将所有的Chunk转换成文件输出Output。在整个构建流程中，Webpack会在恰当的时机执行Plugin里定义的逻辑，从而完成Plugin插件的优化任务。
 * /
// 雪碧图  实现
/**
 * CSS雪碧的基本原理是把你的网站上用到的一些图片整合到一张单独的图片中，从而减少你的网站的HTTP请求数量。该图片使用CSS background和background-position属性渲染，这也就意味着你的标签变得更加复杂
 * 优点: 1、减少加载网页图片时对服务器的请求次数；2、提高页面的加载速度
 * /
 *
 css 选择器: :nth-child(n)、:nth-last-child(n)	
// ts 特性 有点 怎么调试
/**
 * 1、字符串变量的反撇号——`
 * 2、参数类型声明
 * 3、 函数参数（函数的传入参数可以有默认值，但是要放在声明的最后。参数的后面加上问号，表示可选参数）
 * 4、函数结构或者数组对象解构
 * 
*/
// TypeScript中实现继承 ？ 怎么从子类中调用父类 或者基类的构造函数
/**
 * typescript中类的继承用到的是：extends和super
// ts 的interface
/**
 * ts中的接口主要的作用是：
 * 1、对“对象”进行约束描述
   2、对“类”的一部分行为进行抽象,比如是只读的、或者是确认方法入参的类型
   比如: 确定属性
interface UserInfo {
  name: string;
  age: number;
}
ts 的interface 和type
相同点: 
1、都可以描述一个对象或者函数
interface：
interface User {
 name: string
 age: number
}
interface SetUser {
 (name: string, age: number): void;
}
type:
type User = {
 name: string
 age: number
};
type SetUser = (name: string, age: number): void;

2、都允许拓展（extends）
interface extends interface
interface Name { 
 name: string; 
}
interface User extends Name { 
 age: number; 
}

type extends type
type Name = { 
 name: string; 
}
type User = Name & { age: number };

interface extends type
type Name = { 
 name: string; 
}
interface User extends Name { 
 age: number; 
}
// type extends interface
interface Name { 
 name: string; 
}
type User = Name & { 
 age: number; 
}
不同点： 1、type 可以而 interface 不行，type 可以声明基本类型别名，联合类型，元组等类型
        2、interface 可以而 type 不行，interface 能够声明合并
      interface User {
        name: string
        age: number
        }

        interface User {
        sex: string
        }
      /*
        User 接口为 {
        name: string
        age: number
        sex: string 
        }
      */

// 解释TypeScript的Enum枚举类型？
    /**
     * 
     * 当枚举里的属性没指定具体值时，默认值是从 0 开始依次排列，你也可以自己指定具体值，剩下的也是依次递增：
     * enum Colors {
      Red,
      Blue,
      Yellow
    }
    console.log(Colors.Red) // 0
    console.log(Colors.Blue) // 1
    console.log(Colors.Yellow) // 2

    enum Colors {
      Red,
      Blue = 5,
      Yellow
    }

    console.log(Colors.Red) // 0
    console.log(Colors.Blue) // 5
    console.log(Colors.Yellow) // 6
    // 反向映射我们可以通过 Enum[key] 或者 Enum.key 的方式获取到对应的值。typescript 还支持反向映射，即可以通过值来获取键，不过反向映射只支持数字枚举。下面是个例子：
    enum Status {
      Success = 200,
      NotFound = 404,
      Error = 500
    }

    console.log(Status.Success) // 200
    console.log(Status[200]) // Success
    console.log(Status[Status.Success]) // Success


    * /
// Babel是怎么工作的
/**
 * babel 大概分为三大部分:
解析: 将代码(其实就是字符串)转换成 AST( 抽象语法树)
转换: 访问 AST 的节点进行变换操作生成新的 AST
生成: 以新的 AST 为基础生成代码
 * /
//  Set、Map、WeakSet和WeakMap的区别 
/***
 * 1.Set
  Set 是一种叫做集合的数据结构，类似于数组，但成员是唯一且无序的，没有重复的值。
  Set本身是一个构造函数，用来生成 Set 数据结构。
  2.WeakSet
  WeakSet跟Set区别：
  WeakSet 的成员只能是对象，而不能是其他类型的值，而 Set 对象都可以
  WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中。
  3.Map
  Map 是一种叫做字典的数据结构，类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。
  4.WeakMap
  WeakMap跟Map区别：
  WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名
  WeakMap的键名所指向的对象，不计入垃圾回收机制
 * /
 //现在回顾下Promise的实现过程，其主要使用了设计模式中的观察者模式：
1、通过Promise.prototype.then和Promise.prototype.catch方法将观察者方法注册到被观察者Promise对象中，同时返回一个新的Promise对象，以便可以链式调用。
2、被观察者管理内部pending、fulfilled和rejected的状态转变，同时通过构造函数中传递的resolve和reject方法以主动触发状态转变和通知观察者。
//最后来总结下koa中间件的执行流程（洋葱模型）。
1、通过async和await，Promise来控制执行流程，其实就串行执行。
2、通过偏函数将后面一个异步函数（这里在异步函数做了一层包装）作为前一个异步函数的参数（next）
// async 函数是什么: 一句话，async 函数就是 Generator 函数的语法糖，async函数就是将 Generator 函数的星号（*）替换成async，将yield替换成await。
// Genetator
// 对Genetator函数的理解：
（1）Generator函数是ES6提供的一种异步编程的解决方案；
（2）Generator函数是一个状态机，封装了多个内部状态，执行Generator函数会返回一个遍历器对象，也就是说，Generator函数除了是状态机，还是一个遍历器对象生成函数。返回的遍历器对象，可以依次遍历Generator函数内部的每一个状态。
// Generator函数的特征：
（1）function 关键字与函数名之间有一个*号；
（2）Generator函数内部使用yield表达式，定义内部的不同状态；
（3）像调用普通函数那样（函数名后面加个圆括号）调用Generator函数，函数并不会执行，返回的是一个遍历器生成对象，即指向内部状态的指针对象。
下一步，要想函数执行必须调用遍历器对象的next方法，使得指针移向下一个状态。也就是说，每次调用next方法，内部指针就从函数头部或上一次停下来的地方开始执行，直到遇到下一个yield表达式（或return语句）为止。
换言之，Generator 函数是分段执行的，yield表达式是暂停执行的标记，而next方法可以恢复执行。

/**px,em,rem,vh,vw,vmin,vmax的应用场景:
 * 1、px：绝对单位，页面按精确像素展示
 * 2、em：相对单位，基准点为父节点字体的大小，如果自身定义了font-size按自身来计算（浏览器默认字体是16px），整个页面内1em不是一个固定的值。em的特点 em是个相对值 他会根据父级元素的大小而变化 但是如果嵌套了多个元素 要计算它的大小,是件很头疼的事情
这样的情况下,就出现了rem rem的区别在于它是相对于根基元素的,因此不会被它的父类影响到
   3、rem：相对单位，可理解为”root em”, 相对根节点html的字体大小来计算，CSS3新加属性，chrome/firefox/IE9+支持。// 是截止目前用的最多也是最流行的
   vw、vh、vmin、vmax 主要用于页面视口大小布局，相对于rem;v*在页面布局上更加方便简单
    vw：viewpoint width，视窗宽度，1vw等于视窗宽度的1%。
    vh：viewpoint height，视窗高度，1vh等于视窗高度的1%。
    vmin：vw和vh中较小的那个。
    vmax：vw和vh中较大的那个。
 * 
 * **/

// 页面性能优化  SPA首屏加载慢如何解决 ,spa如何不切换页面实现刷新(使用pushState后退管理)
/**
 * spa单页引用的优点
 1、优点：
1).良好的交互体验
用户不需要重新刷新页面，获取数据也是通过Ajax异步获取，页面显示流畅。
2).良好的前后端工作分离模式
单页Web应用可以和RESTful规约一起使用，通过REST API提供接口数据，并使用Ajax异步获取，这样有助于分离客户端和服务器端工作。更进一步，可以在客户端也可以分解为静态页面和页面交互两个部分。
3).减轻服务器压力
服务器只用出数据就可以，不用管展示逻辑和页面合成，吞吐能力会提高几倍；
4).共用一套后端程序代码
不用修改后端程序代码就可以同时用于Web界面、手机、平板等多种客户端；
2、缺点：
1).SEO难度较高
由于所有的内容都在一个页面中动态替换显示，所以在SEO上其有着天然的弱势，所以如果你的站点对SEO很看重，且要用单页应用，那么就做些静态页面给搜索引擎用吧。
2).前进、后退管理
由于单页Web应用在一个页面中显示所有的内容，所以不能使用浏览器的前进后退功能，所有的页面切换需要自己建立堆栈管理，当然此问题也有解决方案，比如利用URI中的散列+iframe实现。
3).初次加载耗时多
为实现单页Web应用功能及显示效果，需要在加载页面的时候将JavaScript、CSS统一加载，部分页面可以在需要的时候加载。所以必须对JavaScript及CSS代码进行合并压缩处理，如果使用第三方库，建议使用一些大公司的CDN，因此带宽的消耗是必然的。
单页应用实现原理
单页应用是指在浏览器中运行的应用，在使用期间页面不会重新加载。当点击导航时，通过哈希监听事件，如果哈希发生了变化，则改变哈希值：window.location.hash，来调用相应的js文件。
相应的js文件里面可以放相应的数据模板，当用ajax请求并返回数据时，渲染模板，生成相应的DOM结构，再插入对应的page 的div中。
基本原理:以 hash 形式（也可以使用 History API 来处理）为例，当 url 的 hash 发生改变时，触发 hashchange 注册的回调，回调中去进行不同的操作，进行不同的内容的展示。
从性能和用户体验的层面来比较的话，后端路由每次访问一个新页面的时候都要向服务器发送请求，然后服务器再响应请求，这个过程肯定会有延迟。而前端路由在访问一个新页面的时候仅仅是变换了一下路径而已，没有了网络延迟，对于用户体验来说会有相当大的提升。
 * /
 
/**
 * 1、Vue-router懒加载
 * 2、使用CDN加速
 * 3、gzip压缩
 * 4、异步加载组件
 * 5、服务端渲染
 * /
// 小程序前端监控
/**
 * JavaScript异常监控：不论是 Web 端还是小程序端，对JavaScript异常的监控都是必要的；
  页面内请求监控：对于小程序来说，我们需要统计发送网络请求的wx.request()异常时的请求状态、请求时长、请求地址等；
  资源加载监控：当需要下载资源到本地的wx.downloadFile() 出现异常时，统计加载时间、异常类型、资源地址等；
  页面性能监控：访问监控、页面来源及流向监控等，方便我们更好的对小程序进行运营；
  用户数据统计：用户的分布、操作系统及版本、微信版本、IP 地址等，给错误的分析提供更多条件。**/
 //你还有什么问题吗
 /**
  * 
如果是HR问，你可以这样回答：
1、请问如果有幸被贵公司录取，在入职前有没有需要我提前学习和准备的？
2、能否分享有关该岗位的日常职责和更多信息？或者简单描述该岗位的「典型一天」？
3、如果我被录用，您希望我在头两个月实现什么目标？
4、绩效评估的机制是如何的？何时会进行首次正式评估？
5、您认为胜任该职位的最重要的指标是什么？
如果是你未来的管理问，你可以这样回答：
1、团队协作方式
2、技术积累
3、对我的期待
如果整场面试下来，作为求职者已经感觉到不能被录用了，那么也要珍惜这次机会：
1、您对我有何担忧吗？
2、您认为我目前缺少何种能力或是资质？
  * **/
 /**
  * /
======================================
enum Gender {  
  Male,  
  Female  
  Other  
}  
console.log(Gender.Female); 
// 我们还可以通过enum值的number值来访问它
console.log(Gender[1]); 
======================================
 var a = 1;
  if(true){
      console.log(a);
      let a = 2;
  }
==============================
// 函数 以及变量的提升
console.log(c);
  var c;
  function c(a) {
      console.log(a);
      var a = 3;
      function a(){
      }
  }
  c(2);
==================================
 var name = "erdong";
var object = {
    name: "chen",
    getNameFunc: function () {
        var that = this;
        return function () {
            return that.name;
        }
    }
}
console.log(object.getNameFunc()());
=======================================
//  考察原型
 
function Person() {
  getAge = function () {
      console.log(10)
  }
  return this;
}

Person.getAge = function () {
  console.log(20)
}

Person.prototype.getAge = function () {
  console.log(30)
}

var getAge = function () {
  console.log(40)
}

function getAge() {
  console.log(50)
}

Person.getAge();
getAge();
Person().getAge();
new Person.getAge();
getAge();
new Person().getAge();

==========================================
// 20
// VM137:17 40
// VM137:3 10
// VM137:9 20
// VM137:3 10
// VM137:13 30
===========================================
console.log(1 + "2" + "2");

console.log(1 + +"2" + "2");

console.log(1 + -"1" + "2");

console.log(+"1" + "1" + "2"); 

console.log( "A" - "B" + "2"); 

console.log( "A" - "B" + 2); 

=============================================
console.log(1);
setTimeout(()=>{
    console.log(2);
    new Promise((resolve,reject)=>{
    console.log(3);
    resolve()
}).then(res=>{
    console.log(4);
})
})
new Promise((resolve,reject)=>{
    console.log(7);
    resolve()
}).then(res=>{
    console.log(8);
}).then(res=>{
    console.log(9);

})
setTimeout(()=>{
    console.log(10);
    new Promise((resolve,reject)=>{
    console.log(11);
    resolve()
}).then(res=>{
    console.log(12);
})
})
console.log(13);