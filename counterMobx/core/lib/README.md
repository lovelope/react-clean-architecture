1. entities 实体里面写类数据定义（平台无关）
2. useCases 对实体进行实例化和操作（平台无关）
3. adapters 对实例化和操作进行拦截，使用需要的数据管理工具（mobx，redux）
4. frameworks 对adapters 进行整合，暴露实例化方法