### java array list

```
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
### java array list (iteration/forEach)
```

for (DataType name: arrayListName) {
  // some code
}

```

---
### java hashMap

```
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
```
for (String name: myFriends.keySet()) {
  System.out.println(name); // prints out value `name` in myFriends HashMap
}
```