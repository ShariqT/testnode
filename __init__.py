"""Top-level package for testnode."""
WEB_DIRECTORY = "./web/js"

__all__ = [
    "NODE_CLASS_MAPPINGS",
    "NODE_DISPLAY_NAME_MAPPINGS",
    "WEB_DIRECTORY",
]

__author__ = """Shariq Torres"""
__email__ = "shariq.torres@gmail.com"
__version__ = "0.0.1"

from .src.testnode.nodes import NODE_CLASS_MAPPINGS
from .src.testnode.nodes import NODE_DISPLAY_NAME_MAPPINGS

