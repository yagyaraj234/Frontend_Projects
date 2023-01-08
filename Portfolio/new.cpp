#include<bits/stdc++.h>
using namespace std;
void printResult(string strs){
    vector<string> tmp;
    string str="";
    for(int i=0;i<strs.length();i++){
        if(strs[i]==' '){
            tmp.push_back(str);
            str="";
        }
        else
        str+= strs[i];
    }
    tmp.push_back(str);
    
    int j;
    for(j=tmp.size()-1;j>0;j--){
        cout<<tmp[j]<" ";
    }
    cout<tmp[0]<<endl;
}

int main(){
    string str;
    getline(cin,str);
    printResult(str); 
    return 0;
}
