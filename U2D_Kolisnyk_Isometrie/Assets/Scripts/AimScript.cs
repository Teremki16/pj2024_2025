using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AimScript : MonoBehaviour
{
    Vector2 MousPos;
    Vector2 worldPos;
    SpriteRenderer sprite;
    void Start()
    {
        sprite = GetComponent<SpriteRenderer>();
        sprite.sortingOrder = 4;
    }

    // Update is called once per frame
    void Update()
    {
        MousPos = new Vector2(Input.mousePosition.x, Input.mousePosition.y);
        worldPos = Camera.main.ScreenToWorldPoint(MousPos);
        transform.right = new Vector3(worldPos.x, worldPos.y, 0) - transform.position;
        if(transform.rotation.z>-0.7f)
        {
            sprite.flipY = false;
        }
        else
        {
            sprite.flipY = true;
        }
        if(transform.parent.GetComponent<PlayerController>().MoveV>0)
        {
            sprite.sortingOrder = 4;
        }
        else if (transform.parent.GetComponent<PlayerController>().MoveV !=0)
        {
            sprite.sortingOrder = 6;
        }
    }
}
