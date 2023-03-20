

#include<stdio.h>
#include<stdlib.h>
#include<iostream>
#include<vector>
using namespace std;
struct Node{
	int data;
	struct Node* next;//这里只能写上指针?
};

//类型好像只能是
//申请空间,设置两个指针,返回节点;
//单纯创建链表
struct Node* CreateList(){
	//弄一个新的节点
	struct Node* node= (struct Node*)malloc(sizeof(struct Node));
	
	//node -> data = n;
	node -> next = NULL;
	return node;
}


//单纯创建节点
//作用在于,后面的插入,是先创建再插入;
struct Node* CreateNode(int n){
	//弄一个新的节点
	struct Node* node = (struct Node*)malloc(sizeof(struct Node));
	//struct Node* node = (struct Node*)malloc(sizeof(struct Node));
	node -> data = n;
	node -> next = NULL;
	return node;
}

//

//遍历打印链表
void printList(struct Node* node){
	struct Node* current = node->next;
	while(current){
		printf("%d ",current->data);
		current=current->next;//移动到下一位
	}
	printf("\n");
	
};

//从头部插入节点和参数
void insertfront(struct Node* node,int data){
	//创建插入的节点
	struct Node* Newnode = CreateNode(data);
	//它的下一个,指向原来表头的下一个;
	Newnode->next=node->next;
	
	//原来表头的下一下,指向新的节点;
	node->next = Newnode;
}

//从尾部插入节点和参数
void insertback(struct Node* node ,int data){
	struct Node* Newnode = CreateNode(data);//这东西只创建节点,不指别的东西;
	
	struct Node* current = node;//从尾部插入要遍历一遍
	
	while(current->next){
		current = current->next;//走到最前面
	}
	current->next = Newnode;//给它接上面
}

int main(){
	//做一个表头
	struct Node* list1 = CreateList();
	struct Node* list2 = CreateList();
	
	//插入一堆数据
	//1,2,3,4,5,7,8,9,0,9,87,6,3
	int ar[]={1,2,3};
	vector<int>s (ar,ar+3);
	//vector<int>s={1,2,3};
	
	//因为是头插法,所以是逆序输出的;
	for(auto a:s){
		insertfront(list1,a);
		//insertback(list,a);
	}
	
	//	insert(list,1);
	printList(list1);
	
	//因为是头插法,所以是逆序输出的;
	for(auto a:s){
		//insertfront(list,a);
		insertback(list2,a);
	}
	printList(list2);
	return 0;
}
