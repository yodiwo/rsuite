<!--start-code-->

```js
/**
 * import data from
 * https://github.com/rsuite/rsuite/blob/master/docs/public/data/users-role.json
 */

const instance = (
  <TagPicker
    data={data}
    groupBy="role"
    placeholder="Select User"
    block
    renderMenuItem={(label, item) => {
      return (
        <div>
          <Icon icon="user" /> {label}
        </div>
      );
    }}
    renderMenuGroup={(label, item) => {
      return (
        <div>
          <Icon icon="group" /> {label} - ({item.children.length})
        </div>
      );
    }}
    renderValue={(values, items, tags) => {
      return values.map((tag, index) => (
        <Tag key={index}>
          <Icon icon="user" /> {tag}
        </Tag>
      ));
    }}
  />
);
ReactDOM.render(instance);
```

<!--end-code-->
