---
prev: /en/
next: false
sidebar: auto
---

## Java

### Java data types


### Java array list

``` java
import java.util.ArrayList;

public class ClassName {
  public static void main (String[] args) {
    
    ArrayList<DataType> arrayListName = new ArrayList<DataType>();
    arrayListName.add(DataType);

    arrayListName.get(index);
  }
}
```

---
### Java array list (iteration/forEach)

``` java
for (DataType name: arrayListName) {
  // some code
}

```

---
### Java hashMap

``` java
import java.util.HashMap;

public class ClassName {
  public static void main (String[] args) {
    
    HashMap<DataTypeKey, DataTypeValue> hashMapName = new HashMap<DataType>();
    hashMapName.put(Key, Value);

    hashMapName.get(Key);
  }
}
```
---

``` java
for (String name: myFriends.keySet()) {
  System.out.println(name); // prints out value `name` in myFriends HashMap
}
```