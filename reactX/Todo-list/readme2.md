Container: 
    Nhiệm vụ: 
    - Quản lý, xử lý dữ liệu
    - Không quan tâm render UI ntn
    - Chỉ quan tâm render cái gì
    - Chứa container con, và các components
    Ví dụ:
    - HomePage: 
    + Props: 
    + State: 
    + Render: 
        - Header
        - Banner
        - RecipeList
        - Footer
Components: 
    Nhiệm vụ: 
    - Lấy dữ liệu để render
    - Không quan tâm dữ liệu từ đâu
    - Thường chỉ có props, k có state
    - Tái sử dụng được với các props khác nhau, render khác nhau!
    Ví dụ: 
    - Header: render header
    - Banner: render Banner
    - Footer: render Footer
    - RecipeList: 
        - Props: render
        - State:
        - Render
