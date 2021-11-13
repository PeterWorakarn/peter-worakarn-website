# Code Base Analysis

### DOM Tree
---
```
Resume feature
ResumePage/
├─ ResumeContainer/
│  ├─ SkeletonElement
│  ├─ Content (optional)
├─ FAB/
```

### Global Stateless Component
---
| Name | Description | Props |
| ----------- | ----------- | ----------- |
| FAB | Float Action Button | text, icon, action |
| Back | Back Button | path |
| SkeletonsElement | Skeleton loading | margin?, width, height |
| ArticleSkeletonsElement | Skeleton loading | - |

### Variable name
---
| Name | Description | Where |
| ----------- | ----------- | ----------- |
| bioQuery | API | resume |
| latestJobQuery | API | resume |
| educationQuery | API | resume |