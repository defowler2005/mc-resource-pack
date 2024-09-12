{
    "namespace": "server_form_inv_ui",
    "main_inv_box@common.inventory_screen_common": {
        "$screen_animations": [
            "@common.container_screen_exit_animation_push",
            "@common.container_screen_exit_animation_pop",
            "@common.container_screen_entrance_animation_push",
            "@common.container_screen_entrance_animation_pop",
            "@common.screen_exit_animation_push_fade",
            "@common.screen_exit_animation_pop_fade",
            "@common.screen_entrance_animation_push_fade",
            "@common.screen_entrance_animation_pop_fade"
        ],
        "button_mappings": [
            {
                "from_button_id": "button.menu_cancel",
                "to_button_id": "button.menu_exit",
                "mapping_type": "global"
            },
            {
                "from_button_id": "button.menu_up",
                "to_button_id": "button.menu_up",
                "mapping_type": "global",
                "scope": "view"
            },
            {
                "from_button_id": "button.menu_down",
                "to_button_id": "button.menu_down",
                "mapping_type": "global",
                "scope": "view"
            },
            {
                "from_button_id": "button.menu_left",
                "to_button_id": "button.menu_left",
                "mapping_type": "global",
                "scope": "view"
            },
            {
                "from_button_id": "button.menu_right",
                "to_button_id": "button.menu_right",
                "mapping_type": "global",
                "scope": "view"
            },
            {
                "from_button_id": "button.menu_select",
                "to_button_id": "button.cursor_drop_all",
                "mapping_type": "pressed"
            },
            {
                "from_button_id": "button.menu_secondary_select",
                "to_button_id": "button.cursor_drop_one",
                "mapping_type": "pressed"
            },
            {
                "from_button_id": "button.menu_ok",
                "to_button_id": "button.cursor_drop_all",
                "mapping_type": "pressed"
            },
            {
                "from_button_id": "button.controller_back",
                "to_button_id": "button.cursor_drop_all",
                "mapping_type": "pressed",
                "ignored": "(not $is_ps4)"
            },
            {
                "from_button_id": "button.controller_select",
                "to_button_id": "button.cursor_drop_one",
                "mapping_type": "pressed"
            },
            {
                "from_button_id": "button.controller_secondary_select",
                "to_button_id": "button.cursor_drop_all",
                "mapping_type": "pressed"
            },
            {
                "from_button_id": "button.controller_secondary_select_left",
                "to_button_id": "button.focus_left",
                "mapping_type": "global"
            },
            {
                "from_button_id": "button.controller_secondary_select_right",
                "to_button_id": "button.focus_right",
                "mapping_type": "global"
            },
            {
                "from_button_id": "button.chat",
                "to_button_id": "button.chat",
                "mapping_type": "global"
            }
        ]
    }
}