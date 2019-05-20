## Python Code Set
### 1. Data_Cleansing_Address.ipynb
Input: <br>
-Raw full address list<br>
Description: Load and cleanse.<br>
Output: Address_Cleaned.csv<br>

### 2. Data_Cleansing_Parcel.ipynb<br>
Input: <br>
-Raw parcels information with zoning codes<br>
Description: Load and cleanse.<br>
Output: Parcels_Clean.csv<br>

### 3. Data_Cleansing_Zoning.ipynb<br>
Input: <br>
-Raw zoning geoinfo<br>
-Raw Colorado opportunity zones geoinfo<br>
-Processed data from Step 1: Address_Cleaned.csv<br>
Description: Load, cleanse, and geo-match.<br>
Output: Parcels_Clean.csv<br>

### 4. Data_Cleansing_Population.ipynb<br>
Input: <br>
-Raw population and projection info<br>
Description: Load, cleanse, and merge.<br>
Output: Population_Clean.csv
<br>
### 5. Data_Cleansing_BBB.ipynb<br>
Input: <br>
-Raw business info from Better Business Bureau<br>
Description: Load, cleanse, and verify with current addresses.<br>
Output: Data_Cleansing_BBB.ipynb<br>

### 6. Machine Learning.ipynb<br>
Input: <br>
-Previous processed data<br>
-Property usage type and subtype mapping<br>
Description: Merge, learn with a multiclass classification model with shallow CNN to predict property usage, add brief reseasons.<br>
Output: Results.ipynb (currently only available for Denver)<br>
