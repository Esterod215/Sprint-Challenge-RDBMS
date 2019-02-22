1. RDBMS stands for Relational Database Management Systems. There are many types
of Database Management Systems but by far relational is the most common and the word relational
is derived from a mathematical idea that is equivalent to a table. So, an RDBMS
manages database data in the form of tables with specific rows and columns.
Structured Query Language (SQL) is the standard language used to manage databases and the data 
within them. It is the way we interact with a DBMS.

2. Tables need a primary key because it is the specific piece of data's unique identifier that can be set to
autoincrement when new data is added. Without it, it would be exteremly difficult to select a specific piece of
data to display or manipulate as other data in that table may have the same value and can result in the wrong data being altered. 
It would also make it difficult to connect to other tables via a foreign key as an item may be linked to the 
wrong data if that data is repeated.

3. The name given to the item that references another table's primary key is called
a foreign key.

4. To model a many-to-many relationships, we need to introduce a third table that holds foreign keys that reference the primary keys on the related tables.
