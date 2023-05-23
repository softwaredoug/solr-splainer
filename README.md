## The Splainer!

This is a version of [Splainer](http://github.com/o19s/splainer) that allows running via Solr Admin UI.

With [npm installed](https://www.npmjs.com/)

```bash
npm install -g grunt-cli
npm install .
grunt dist
$ (cd dist && zip -r - *) > splainer.zip
unzip splainer.zip -d ~/path/to/solr/server/solr-webapp/webapp/splainer
```

See [main Splainer project](http://github.com/o19s/splainer) for more project information

### Changes to make it work in Solr Admin UI

* Changes communication with Solr to use GET instead af JSONP, same way the Admin UI communicates with Solr


## Who?

Another Hack by [Doug Turnbull](http://softwaredoug.com)

Created by [OpenSource Connections](http://opensourceconnections.com).

Thanks to all the [community contributors](https://github.com/o19s/splainer/graphs/contributors) for finding bugs and sharing fixes!.

## License

Released under [Apache 2](LICENSE.txt)
