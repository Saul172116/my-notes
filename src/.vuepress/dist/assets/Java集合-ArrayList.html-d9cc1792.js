const e=JSON.parse('{"key":"v-056f4c7a","path":"/codenotes/javacore/Java%E9%9B%86%E5%90%88-ArrayList.html","title":"ArrayList","lang":"zh-CN","frontmatter":{"title":"ArrayList","icon":"write","category":["Java"],"tag":["Java"],"sticky":false,"star":false,"article":true,"timeline":true,"description":"概述 ArrayList实现了List接口，是顺序容器，即元素存放的数据与放进去的顺序相同，允许放入null元素，底层通过数组实现。除该类未实现同步外，其余跟Vector大致相同。每个ArrayList都有一个容量(capacity)，表示底层数组的实际大小，容器内存储元素的个数不能多于当前容量。当向容器中添加元素时，如果容量不足，容器会自动增大底层数组的大小。前面已经提过，Java泛型只是编译器提供的语法糖，所以这里的数组是一个Object数组，以便能够容纳任何类型的对象。","head":[["meta",{"property":"og:url","content":"https://gitee.com/oucystong/codenotes/javacore/Java%E9%9B%86%E5%90%88-ArrayList.html"}],["meta",{"property":"og:site_name","content":"小佟の学习笔记"}],["meta",{"property":"og:title","content":"ArrayList"}],["meta",{"property":"og:description","content":"概述 ArrayList实现了List接口，是顺序容器，即元素存放的数据与放进去的顺序相同，允许放入null元素，底层通过数组实现。除该类未实现同步外，其余跟Vector大致相同。每个ArrayList都有一个容量(capacity)，表示底层数组的实际大小，容器内存储元素的个数不能多于当前容量。当向容器中添加元素时，如果容量不足，容器会自动增大底层数组的大小。前面已经提过，Java泛型只是编译器提供的语法糖，所以这里的数组是一个Object数组，以便能够容纳任何类型的对象。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-22T14:28:29.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:modified_time","content":"2022-12-22T14:28:29.000Z"}]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"ArrayList的实现","slug":"arraylist的实现","link":"#arraylist的实现","children":[{"level":3,"title":"底层数据结构","slug":"底层数据结构","link":"#底层数据结构","children":[]},{"level":3,"title":"构造函数","slug":"构造函数","link":"#构造函数","children":[]},{"level":3,"title":"两个常用数组拷贝方法","slug":"两个常用数组拷贝方法","link":"#两个常用数组拷贝方法","children":[]},{"level":3,"title":"自动扩容","slug":"自动扩容","link":"#自动扩容","children":[]},{"level":3,"title":"add()-addAll()","slug":"add-addall","link":"#add-addall","children":[]},{"level":3,"title":"set()","slug":"set","link":"#set","children":[]},{"level":3,"title":"get()","slug":"get","link":"#get","children":[]},{"level":3,"title":"remove()-removeAll()-retainAll()","slug":"remove-removeall-retainall","link":"#remove-removeall-retainall","children":[]},{"level":3,"title":"size()","slug":"size","link":"#size","children":[]},{"level":3,"title":"isEmpty()","slug":"isempty","link":"#isempty","children":[]},{"level":3,"title":"contains()","slug":"contains","link":"#contains","children":[]},{"level":3,"title":"toArray()","slug":"toarray","link":"#toarray","children":[]},{"level":3,"title":"clear()","slug":"clear","link":"#clear","children":[]},{"level":3,"title":"subList()","slug":"sublist","link":"#sublist","children":[]},{"level":3,"title":"trimToSize()","slug":"trimtosize","link":"#trimtosize","children":[]},{"level":3,"title":"indexOf()-lastIndexOf()","slug":"indexof-lastindexof","link":"#indexof-lastindexof","children":[]},{"level":3,"title":"forEach()-removeIf()-replaceAll()-sort()","slug":"foreach-removeif-replaceall-sort","link":"#foreach-removeif-replaceall-sort","children":[]},{"level":3,"title":"Fail-Fast机制","slug":"fail-fast机制","link":"#fail-fast机制","children":[]}]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1671719309000,"updatedTime":1671719309000,"contributors":[{"name":"sunnenghong","email":"1960646719@qq.com","commits":1}]},"readingTime":{"minutes":13.87,"words":4160},"filePathRelative":"codenotes/javacore/Java集合-ArrayList.md","localizedDate":"2022年12月22日","excerpt":"<h2> 概述</h2>\\n<p><code>ArrayList</code>实现了<code>List</code>接口，是顺序容器，即元素存放的数据与放进去的顺序相同，允许放入<code>null</code>元素，底层通过<strong>数组实现</strong>。除该类未实现同步外，其余跟<code>Vector</code>大致相同。每个<code>ArrayList</code>都有一个容量<code>(capacity)</code>，表示底层数组的实际大小，容器内存储元素的个数不能多于当前容量。当向容器中添加元素时，如果容量不足，容器会自动增大底层数组的大小。前面已经提过，<code>Java</code>泛型只是编译器提供的语法糖，所以这里的数组是一个<code>Object</code>数组，以便能够容纳任何类型的对象。</p>","autoDesc":true}');export{e as data};
