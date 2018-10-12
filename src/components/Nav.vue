<template>
    <Menu theme="light" width="auto">
        <MenuItem name="1" to="/">
            <Icon type="ios-home-outline" />
            首页
        </MenuItem>
        <MenuItem name="2" to="/articles">
            <Icon type="md-book" />
            我的发表
        </MenuItem>
        <MenuItem name="3" to="/comments">
            <Icon type="ios-bulb" />
            我的评论
        </MenuItem>
        <Submenu name="4">
            <template slot="title">
                <Icon type="ios-contact" />
                个人中心
            </template>
            <MenuItem name="4-1" to="/user">&nbsp;&nbsp;&nbsp;&nbsp;信息修改</MenuItem>
            <MenuItem name="4-2" to="/password">&nbsp;&nbsp;&nbsp;&nbsp;变更密码</MenuItem>
        </SubMenu>
        <MenuItem name="5" to="/about">
            <Icon type="ios-information-circle" />
            more ...
        </MenuItem>
    </Menu>
</template>
