export default {
        plugins: [
                ['umi-plugin-react', {
                        //这里暂时还没添加配置，该插件还不会有作用
                        }],
        ],
        singular:true,
        routes: [{
                path: '/',
                component: './HelloWorld',
        }],
};
